import { codemods } from "module-replacements-codemods";

const config = {
  presets: Object.keys(codemods).reduce((acc, key) => {
    acc[key] = (file, { jscodeshift: j }, options) => {
      const { transform } = codemods[key](options);
      return transform({ file });
    };
    return acc;
  }, {}),
};

export default config;
