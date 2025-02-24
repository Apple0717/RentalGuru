import { defineStyle, createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { tableAnatomy as parts } from "@chakra-ui/anatomy";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = defineStyle({
    thead: {
        th: {
            p: "inherit",
        },
    },
});

const sizes = {
    xs: defineStyle({
        tbody: {
            tr: {
                td: {
                    py: "8px",
                },
            },
        },
    }),
    sm: defineStyle({
        tbody: {
            tr: {
                td: {
                    py: "16px",
                },
            },
        },
    }),
};

const Table = defineMultiStyleConfig({
    baseStyle,
    sizes,
    defaultProps: {},
});

export default Table;
