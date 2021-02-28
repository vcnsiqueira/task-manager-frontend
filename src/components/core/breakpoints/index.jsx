const size = {
    xs: 599,
    sm: 600,
    ms: 760,
    md: 960,
    lg: 1280,
    ml: 1600,
    xl: 1920,
  };
  
  const device = {
    xs: `(max-width: ${size.xs}px)`,
    sm: `(min-width: ${size.sm}px)`,
    ms: `(max-width: ${size.ms}px)`,
    md: `(min-width: ${size.md}px)`,
    lg: `(min-width: ${size.lg}px)`,
    ml: `(min-width: ${size.ml}px)`,
    xl: `(min-width: ${size.xl}px)`,
  };
  
  export { device, size };