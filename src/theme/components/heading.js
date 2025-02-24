const baseStyle = {
  color: "gray.900",
};

const sizes = {
  texts: {
    fontSize: {
      base: "13px",
      sm: "16px",
    },
    fontWeight: 500,
  },
  headingxs: {
    fontSize: "12px",
    fontWeight: 600,
  },
  headings: {
    fontSize: {
      base: "13px",
      sm: "16px",
    },
    fontWeight: 700,
  },
  headingmd: {
    fontSize: {
      md: "24px",
      base: "20px",
      sm: "22px",
    },
    fontWeight: 600,
  },
  headinglg: {
    fontSize: {
      md: "30px",
      base: "25px",
      sm: "28px",
    },
    fontWeight: 600,
  },
  textxs: {
    fontSize: "12px",
    fontWeight: 500,
  },
  headingxl: {
    fontSize: {
      md: "36px",
      base: "30px",
      sm: "34px",
    },
    fontWeight: 600,
  },
};
const defaultProps = { size: "headingmd" };

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};

export default Heading;
