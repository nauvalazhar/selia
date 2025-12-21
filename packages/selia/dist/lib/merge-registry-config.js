// src/lib/merge-registry-config.ts
function mergeRegistryConfig(existingConfig, registryKey, registryData) {
  const nextConfig = { ...existingConfig };
  if (!nextConfig.registries) {
    nextConfig.registries = {
      default: registryKey,
      sources: {
        [registryKey]: registryData
      }
    };
    return nextConfig;
  }
  if (!nextConfig.registries.sources) {
    nextConfig.registries.sources = {};
  }
  if (nextConfig.registries.sources[registryKey]) {
    return nextConfig;
  }
  nextConfig.registries.sources[registryKey] = registryData;
  return nextConfig;
}
export {
  mergeRegistryConfig
};
//# sourceMappingURL=merge-registry-config.js.map