module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const rules = webpackConfig.module.rules;
      rules.forEach(rule => {
        if (
          rule.enforce === "pre" &&
          rule.use &&
          rule.use.some(u => u.loader && u.loader.includes("source-map-loader"))
        ) {
          rule.exclude = [
            ...(Array.isArray(rule.exclude) ? rule.exclude : [rule.exclude]).filter(Boolean),
            /@mediapipe\/tasks-vision/
          ];
        }
      });
      return webpackConfig;
    },
  },
};
