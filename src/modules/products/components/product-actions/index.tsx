// full_web-storefront/src/modules/products/components/product-actions/index.tsx

"use client";

import { Region } from "@medusajs/medusa";
import { PricedVariant } from "@medusajs/medusa/dist/types/pricing";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { isEqual } from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

import { getProductPrice } from "@lib/util/get-product-price";
import { useIntersection } from "@lib/hooks/use-in-view";
import { addToCart } from "@modules/cart/actions";
import OptionSelect from "@modules/products/components/option-select";
import ProductPrice from "../product-price";

type ProductActionsProps = {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
};

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [isAdding, setIsAdding] = useState(false);

  const countryCode = useParams()?.countryCode as string;

  const [selectedVariant, setSelectedVariant] = useState<PricedVariant | undefined>(undefined);
console.log(selectedVariant)
  // Initialize selectedVariant based on product variants
  useEffect(() => {
    if (product.variants.length === 1) {
      setSelectedVariant(product.variants[0]);
    } else if (product.variants.length > 1 && (product.options?.length ?? 0) === 0) {
      // Default to the first variant if multiple variants exist without options
      setSelectedVariant(product.variants[0]);
    }
  }, [product.variants, product.options]);
  // Initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {};

    if (product.options && product.options.length > 0) {
      for (const option of product.options) {
        Object.assign(optionObj, { [option.id]: undefined });
      }
    }

    setOptions(optionObj);
  }, [product]);

  // Memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {};

    for (const variant of product.variants) {
      if (!variant.id) continue;

      const temp: Record<string, string> = {};

      if (variant.options) {
        for (const option of variant.options) {
          temp[option.option_id] = option.value;
        }
      }

      map[variant.id] = temp;
    }

    return map;
  }, [product.variants]);

  // Memoized function to check if the current options are a valid variant
  const isOptionsComplete = options && Object.values(options).every(value => value !== undefined);

  const variant = useMemo(() => {
    if (!isOptionsComplete) {
      return undefined;
    }

    let variantId: string | undefined = undefined;

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key;
      }
    }

    return product.variants.find((v) => v.id === variantId);
  }, [options, variantRecord, product.variants, isOptionsComplete]);

  // Update the selected variant when options change
  useEffect(() => {
    if (product.options && product.options.length > 0) {
      // Only update selectedVariant when there are options
      if (variant) {
        setSelectedVariant(variant);
      } else {
        setSelectedVariant(undefined);
      }
    }
  }, [variant, product.options]);

  // If product only has one variant, then select it
  useEffect(() => {
    if (product.variants.length === 1 && product.variants[0].id) {
      setOptions(variantRecord[product.variants[0].id] || {});
    }
  }, [product.variants, variantRecord]);

  // Update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update });
  };

  // Check if the selected variant is in stock
  const inStock = useMemo(() => {
    if (!selectedVariant) {
      return false;
    }

    // If we don't manage inventory, we can always add to cart
    if (!selectedVariant.manage_inventory) {
      return true;
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant.allow_backorder) {
      return true;
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant.inventory_quantity &&
      selectedVariant.inventory_quantity > 0
    ) {
      return true;
    }

    // Otherwise, we can't add to cart
    return false;
  }, [selectedVariant]);

  const actionsRef = useRef<HTMLDivElement>(null);

  const inView = useIntersection(actionsRef, "0px");

  // Add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) {
      return null;
    }

    setIsAdding(true);
    console.log(selectedVariant);

    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
    });

    setIsAdding(false);
  };

  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: selectedVariant?.id,
    region,
  });

  //const selectedPrice = selectedVariant ? variantPrice : cheapestPrice;
 // const priceDisplay = selectedVariant?.calculated_price ?? "Prezzo non disponibile";
 const priceDisplay = product.variants?.[0]?.prices?.[0]?.amount
 ? `${(product.variants[0].prices[0].amount / 100).toFixed(2)} ${region.currency_code.toUpperCase()}`
 : "Price not available"
 //{product.variants?.[0]?.prices?.[0]?.amount
 //) ? `${(product.variants[0].prices[0].amount / 100).toFixed(2)} ${region.currency_code.toUpperCase()}`
 // : "Price not available"}
 //variantPrice?.calculated_price ?? "Prezzo non disponibile";
 

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div>
          {product.variants.length > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!inStock || !selectedVariant || !!disabled || isAdding}
          className="w-full h-10 flex items-center justify-between bg-primary text-white rounded-lg shadow-neumorphism-light p-4 transition-shadow duration-300 ease-in-out hover:shadow-neumorphism-dark"
          data-testid="add-product-button"
        >
          <span>{priceDisplay}</span>
          <FiShoppingCart size={20} />
        </button>
      </div>
    </>
  );
}
