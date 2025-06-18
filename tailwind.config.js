module.exports = {
  theme: {
    extend: {
      fontSize: {
        xs: ["calc(var(--zoom) * 0.75rem)", { lineHeight: "2rem" }],
        sm: ["calc(var(--zoom) * 0.875rem)", { lineHeight: "2.5rem" }],
        base: ["calc(var(--zoom) * 1rem)", { lineHeight: "3rem" }],
        lg: ["calc(var(--zoom) * 1.125rem)", { lineHeight: "3.5rem" }],
        xl: ["calc(var(--zoom) * 1.25rem)", { lineHeight: "3.5rem" }],
        "2xl": ["calc(var(--zoom) * 1.5rem)", { lineHeight: "4rem" }],
        "3xl": ["calc(var(--zoom) * 1.875rem)", { lineHeight: "4.5rem" }],
        "4xl": ["calc(var(--zoom) * 2.25rem)", { lineHeight: "5rem" }],
        "5xl": ["calc(var(--zoom) * 3rem)", { lineHeight: "2" }],
        "6xl": ["calc(var(--zoom) * 3.75rem)", { lineHeight: "2" }],
        "7xl": ["calc(var(--zoom) * 4.5rem)", { lineHeight: "2" }],
        "8xl": ["calc(var(--zoom) * 6rem)", { lineHeight: "2" }],
        "9xl": ["calc(var(--zoom) * 8rem)", { lineHeight: "2" }],
      },
    },
  },
};
