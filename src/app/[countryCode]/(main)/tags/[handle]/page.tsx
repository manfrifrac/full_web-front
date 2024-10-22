// File: full_web-storefront\src\app\[countryCode]\(main)\tags\[handle]\page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getTagByValue, // Updated import
  getTagsList,
  listRegions,
} from "@lib/data";
import TagTemplate from "@modules/tags/templates";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";

import { ProductTag } from "@medusajs/medusa";

type Props = {
  params: { handle: string; countryCode: string };
  searchParams: {
    page?: string;
    sortBy?: SortOptions;
  };
};

export const PRODUCT_LIMIT = 12;

export async function generateStaticParams() {
  const { tags } = await getTagsList();

  if (!tags) {
    return [];
  }

  const countryCodes = await listRegions().then((regions) =>
    regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
  );

  const tagValues = tags.map((tag) => tag.value.toLowerCase()); // Assuming 'value' is URL-friendly

  const staticParams = countryCodes
    ?.map((countryCode) =>
      tagValues.map((value) => ({
        countryCode,
        handle: value, // 'handle' corresponds to 'value'
      }))
    )
    .flat();

  return staticParams;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = await getTagByValue(params.handle); // Use 'handle' as 'value'

  if (!tag) {
    notFound();
  }

  const metadata = {
    title: `${tag.value} | Medusa Store`,
    description: `${tag.value} tag`,
  } as Metadata;

  return metadata;
}

export default async function TagPage({ params, searchParams }: Props) {
  const { sortBy, page } = searchParams;

  const tag = await getTagByValue(params.handle); // Use 'handle' as 'value'

  if (!tag) {
    notFound();
  }

  return (
    <TagTemplate
      tag={tag} // Pass the tag directly without manual property overrides
      page={page}
      sortBy={sortBy}
      countryCode={params.countryCode}
    />
  );
}
