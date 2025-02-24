import React from "react";
import { Select } from "chakra-react-select";
import PropTypes from "prop-types";

const shapes = {
    round: {
        borderRadius: "8px",
    },
};
const variants = {
    fill: {
        white_A700: {
            bg: "white.a700",
            color: "gray.600_01",
        },
    },
};
const sizes = {
    xs: {
        h: "36px",
        fontSize: "14px",
        px: "16px",
    },
};

const SelectBox = React.forwardRef(
    (
        {
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            style,
            shape = "",
            size = "xs",
            variant = "fill",
            color = "white_A700",
            ...restProps
        },
        ref,
    ) => {
        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    components={{
                        IndicatorSeparator: () => null,
                        ...(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                    }}
                    chakraStyles={{
                        container: (provided) => ({
                            ...provided,
                            ...sizes[size],
                            ...shapes[shape],
                            ...variants[variant][color],
                            ...style,
                            zIndex: 0,
                            display: "flex",
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "none",
                            minHeight: "auto",
                            width: "100%",
                            color: "inherit !important",
                            "&:hover": {
                                border: "0 !important",
                            },
                            "&:focus-visible, &[data-focus-visible]": {
                                boxShadow: "none !important",
                            },
                            "&>div": {
                                padding: "0 !important",
                            },
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected && "#ffffff !important",
                            color: state.isSelected && "#4b5563 !important",
                            "&:hover": {
                                backgroundColor: "#ffffff",
                                color: "#4b5563",
                            },
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            display: "flex",
                            marginLeft: undefined,
                            marginRight: undefined,
                        }),
                        menu: ({ width, ...css }) => ({ ...css }),
                    }}
                    menuPortalTarget={document.body}
                    closeMenuOnScroll={(event) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                />
            </>
        );
    },
);

SelectBox.propTypes = {
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white_A700"]),
};

export { SelectBox };