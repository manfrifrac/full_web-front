// src/modules/products/components/product-carousel/ProductCarousel.server.tsx

import React from "react";
import ProductCarouselClient from "./ProductCarouselClient";
import { getRegion, getProductsByTagValue } from "@lib/data";
import { transformProductForClient } from "@lib/data";

interface ProductCarouselProps {
  tag: string;
  countryCode: string;
}

const ProductCarouselServer = async ({ tag, countryCode }: ProductCarouselProps) => {
  const region = await getRegion(countryCode);

  if (!region) {
    return <p className="text-center">Region not found.</p>;
  }

  const products = await getProductsByTagValue({
    value: tag,
    regionId: region.id,
  });

  if (!products || products.length === 0) {
    return <p className="text-center">No products found for this tag.</p>;
  }

  const transformedProducts = products.map(transformProductForClient);

  return (
    <div className="relative w-full overflow-hidden">
      <ProductCarouselClient
        products={transformedProducts}
        region={region}
        countryCode={countryCode}
      />
    </div>
  );
};

export default ProductCarouselServer;
