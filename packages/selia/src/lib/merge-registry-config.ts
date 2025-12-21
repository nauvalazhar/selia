export function mergeRegistryConfig(
  existingConfig: any,
  registryKey: string,
  registryData: { name: string; url: string },
) {
  const nextConfig = { ...existingConfig };

  if (!nextConfig.registries) {
    nextConfig.registries = {
      default: registryKey,
      sources: {
        [registryKey]: registryData,
      },
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
