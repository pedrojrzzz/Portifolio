export const breakpoint = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export const media = {
  xxl: `@media (mix-width: ${breakpoint.xxl})`,
  xl: `@media (mix-width: ${breakpoint.xl})`,
  lg: `@media (mix-width: ${breakpoint.lg})`,
  md: `@media (mix-width: ${breakpoint.md})`,
  sm: `@media (mix-width: ${breakpoint.sm})`,
};
