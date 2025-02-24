import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
    xs: defineStyle({
        h: "22px",
        px: "2px"
    }),
    md: defineStyle({
        h: "28px",
        fontSize: "14px",
        px: "16px"
    }),
    sm: defineStyle({
        h: "24px",
        fontSize: "14px",
        px: "6px"
    }),
    lg: defineStyle({
        h: "36px",
        fontSize: "14px",
        px: "34px"
    }),
    xl: defineStyle({
        h: "38px",
        px: "8px"
    }),
    "2xl": defineStyle({
        h: "40px",
        fontSize: "14px",
        px: "10px"
    })
};

const variants = {
    fill: defineStyle((props) => {
        const { colorScheme } = props;
        const colorCombinations = {
            "white A700": {
                bg: "white.a700",
                color: "blue_gray.700_02"
            },
            "light_green 100": {
                bg: "light_green.100",
                color: "blue_gray.700",
            },
            light_green_A700: {
                bg: "light_green.a700",
                color: "white.a700"
            },
        };
        return colorCombinations[colorScheme] || colorCombinations["white_A700"];
    }),
    outline: defineStyle((props) => {
        const { colorScheme } = props;
        const colorCombinations = {
            light_green_A700_cyan_300: {
                borderWidth: "0.5px",
                borderStyle: "solid",
                borderImage: "linear-gradient(90deg, #77b800, #4ecdc4) 1",
                bgGradient: "linear-gradient(90deg, #77b80019,#4ecdc419)",
            },
        };
        return colorCombinations[colorScheme] || colorCombinations["light_green_A700_cyan_300"];
    }),
};

const Button = defineStyleConfig({
    baseStyle,
    variants,
    sizes,
    defaultProps: {
        variant: "fill",
        size: "2xl"
    }
});

export default Button;