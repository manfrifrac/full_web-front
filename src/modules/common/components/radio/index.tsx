// full_web-storefront/src/modules/common/components/radio/index.tsx

const Radio = ({ checked, 'data-testid': dataTestId }: { checked: boolean, 'data-testid'?: string }) => {
  return (
    <>
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        className="group relative flex h-5 w-5 items-center justify-center outline-none bg-neumorphism-bg rounded-full shadow-neumorphism-light transition-shadow duration-300 ease-in-out hover:shadow-neumorphism-dark"
        data-testid={dataTestId || 'radio-button'}
      >
        {checked && (
          <span
            data-state={checked ? "checked" : "unchecked"}
            className="flex items-center justify-center"
          >
            <div className="bg-ui-bg-base shadow-details-contrast-on-bg-interactive rounded-full h-1.5 w-1.5"></div>
          </span>
        )}
      </button>
    </>
  )
}

export default Radio
