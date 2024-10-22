// full_web-storefront/src/modules/common/components/checkbox/index.tsx

import { Checkbox, Label } from "@medusajs/ui"
import React from "react"

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
  name?: string
  'data-testid'?: string
}

const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  checked = true,
  onChange,
  label,
  name,
  'data-testid': dataTestId
}) => {
  return (
    <div className="flex items-center space-x-2 bg-neumorphism-bg rounded-lg shadow-neumorphism-light p-2 transition-shadow duration-300 ease-in-out hover:shadow-neumorphism-dark">
      <Checkbox
        className="text-base-regular flex items-center gap-x-2"
        id={name || "checkbox"}
        role="checkbox"
        type="button"
        checked={checked}
        aria-checked={checked}
        onClick={onChange}
        name={name}
        data-testid={dataTestId}
      />
      <Label
        htmlFor={name || "checkbox"}
        className="!transform-none !txt-medium text-gray-700"
        size="large"
      >
        {label}
      </Label>
    </div>
  )
}

export default CheckboxWithLabel
