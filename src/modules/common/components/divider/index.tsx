// full_web-storefront/src/modules/common/components/divider/index.tsx

import { clx } from "@medusajs/ui"

const Divider = ({ className }: { className?: string }) => (
  <div
    className={clx(
      "h-px w-full border-b border-gray-200 my-2 bg-neumorphism-bg",
      className
    )}
  />
)

export default Divider
