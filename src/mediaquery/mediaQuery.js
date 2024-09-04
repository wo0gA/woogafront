export const BREAKPOINT_PC = "pc";
export const BREAKPOINT_TABLET = "tablet";
export const BREAKPOINT_PHONE = "phone";

export const breakpoints = {
  pc: 1279,
  tablet: 767,
  phone: 479,
};

export const mediaQueries = (key) => {
  return `@media (max-width: ${breakpoints[key]}px)`;
};

/**
  미디어쿼리 사용방법 -> customStyled component 내에서 호출

 ex)

 ${mediaQueries(BREAKPOINT_TABLET)} {
    ${(props) => (props.theme.width )};
  }

 * */
