// File: full_web-storefront\src\modules\tags\templates\index.tsx

import { ProductTag } from "@medusajs/medusa";
import { Suspense } from "react";

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import RefinementList from "@modules/store/components/refinement-list";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
import PaginatedProducts from "@modules/store/templates/paginated-products";

export default function TagTemplate({
  sortBy,
  tag,
  page,
  countryCode,
}: {
  sortBy?: SortOptions;
  tag: ProductTag;
  page?: string;
  countryCode: string;
}) {
  const pageNumber = page ? parseInt(page, 10) : 1;

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <RefinementList sortBy={sortBy || "created_at"} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1>{tag.value}</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            tagId={tag.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  );
}
