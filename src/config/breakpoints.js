export const breakpoint = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export const media = {
  xxl: `@media (max-width: ${breakpoint.xxl})`,
  xl: `@media (max-width: ${breakpoint.xl})`,
  lg: `@media (max-width: ${breakpoint.lg})`,
  md: `@media (max-width: ${breakpoint.md})`,
  sm: `@media (max-width: ${breakpoint.sm})`,
};
