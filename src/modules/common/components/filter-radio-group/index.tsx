// full_web-storefront/src/modules/common/components/filter-radio-group/index.tsx

import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"
import { ChangeEvent } from "react"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  'data-testid'?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  'data-testid': dataTestId
}: FilterRadioGroupProps) => {
  return (
    <div className="flex flex-col gap-y-3 bg-neumorphism-bg rounded-lg shadow-neumorphism-light p-4 transition-shadow duration-300 ease-in-out hover:shadow-neumorphism-dark">
      <Text className="txt-compact-small-plus text-gray-600">{title}</Text>
      <RadioGroup data-testid={dataTestId}>
        {items?.map((i) => (
          <div
            key={i.value}
            className={clx("flex gap-x-2 items-center", {
              "ml-[-1.75rem]": i.value === value,
            })}
          >
            {i.value === value && <EllipseMiniSolid />}
            <RadioGroup.Item
              checked={i.value === value}
              onClick={(e) =>
                handleChange(
                  e as unknown as ChangeEvent<HTMLButtonElement>,
                  i.value
                )
              }
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <Label
              htmlFor={i.value}
              className={clx(
                "!txt-compact-small !transform-none text-gray-700 hover:cursor-pointer",
                {
                  "text-gray-900": i.value === value,
                }
              )}
              data-testid="radio-label"
              data-active={i.value === value}
            >
              {i.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
