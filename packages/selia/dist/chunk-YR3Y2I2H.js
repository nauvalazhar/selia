// src/lib/default-config.ts
var defaultConfig = {
  framework: "react",
  paths: {
    components: "components/selia",
    utils: "lib/utils.ts"
  },
  imports: {
    utils: "@/lib/utils",
    components: "@/components/selia"
  },
  registries: {
    default: "selia",
    sources: {
      selia: {
        name: "selia",
        url: "http://localhost:5173/registry"
      }
    }
  }
};

export {
  defaultConfig
};
//# sourceMappingURL=chunk-YR3Y2I2H.js.map