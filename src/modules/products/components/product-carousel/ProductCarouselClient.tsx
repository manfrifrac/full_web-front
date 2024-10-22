// src/modules/products/components/product-carousel/ProductCarouselClient.tsx

"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import ProductActions from "@modules/products/components/product-actions";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProductCarouselClientProps {
  products: PricedProduct[];
  region: Region;
  countryCode: string;
}

const ProductCarouselClient: React.FC<ProductCarouselClientProps> = ({
  products,
  region,
  countryCode,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Funzionalità di autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    };

    const intervalId = setInterval(autoplay, 3000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="relative py-10 bg-gray-100">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {products.map((product) => (
            <div
              className="embla__slide flex-[0_0_auto] w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
              key={product.id}
            >
              <div className="bg-white neumorphism-card p-4 flex flex-col h-full">
                <Link
                  href={`/${countryCode}/products/${product.handle}`}
                  className="flex-grow"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={product.thumbnail ?? "/placeholder-image.jpg"}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm font-semibold line-clamp-2 min-h-[3em]">
                      {product.title}
                    </p>
                    {/*<p className="text-sm text-gray-500">
                      {product.variants?.[0]?.prices?.[0]?.amount
                        ? `${(product.variants[0].prices[0].amount / 100).toFixed(2)} ${
                            region.currency_code.toUpperCase()
                          }`
                        : "Prezzo non disponibile"}
                    </p>*/}
                  </div>
                </Link>
                <div className="mt-auto">
                  <ProductActions product={product} region={region} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md"
        aria-label="Scroll Previous"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md"
        aria-label="Scroll Next"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default ProductCarouselClient;
