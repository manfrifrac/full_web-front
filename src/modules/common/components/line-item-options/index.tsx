// full_web-storefront/src/modules/common/components/line-item-options/index.tsx

import { ProductVariant } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type LineItemOptionsProps = {
  variant: ProductVariant
  'data-testid'?: string
  'data-value'?: ProductVariant
}

const LineItemOptions = ({ variant, 'data-testid': dataTestid, 'data-value': dataValue }: LineItemOptionsProps) => {
  return (
    <Text
      data-testid={dataTestid}
      data-value={dataValue}
      className="inline-block txt-medium text-gray-600 w-full overflow-hidden text-ellipsis bg-neumorphism-bg rounded-lg shadow-neumorphism-light p-2 transition-shadow duration-300 ease-in-out hover:shadow-neumorphism-dark"
    >
      Variant: {variant.title}
    </Text>
  )
}

export default LineItemOptions
