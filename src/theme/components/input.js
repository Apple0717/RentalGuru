import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { cursor: "text" } });

const sizes = {
    xs: defineStyle({
        field: {
            fontSize: "14px",
            px: "16px",
            height: "36px",
        },
    }),
    sm: defineStyle({
        field: {
            fontSize: "14px",
            px: "18px",
            height: "54px",
        },
    }),
};

const variants = {
    fill: defineStyle((props) => {
        const { colorScheme } = props;
        const colorCombinations = {
            "white_A700_7a": {
                field: {
                    bg: "white.a700_7a",
                },
            },
            "white_A700": {
                field: {
                    bg: "white.a700",
                },
            },
        };
        return colorCombinations[colorScheme] || colorCombinations["white_A700"];
    }),
};

const Input = defineStyleConfig({
    baseStyle,
    variants,
    sizes,
    defaultProps: {
        variant: "fill",
        size: "sm",
    },
});
export default Input;