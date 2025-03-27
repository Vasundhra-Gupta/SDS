export default function Button({
    type,
    BtnText,
    className = "",
    disabled,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            disabled={disabled}
            className={`bg-[#005f99] text-white hover:bg-[#314551] rounded-lg font-semibold px-4 py-3 overflow-hidden mt-2 disabled:cursor-not-allowed ${className}`}
        >
            {BtnText}
        </button>
    );
}