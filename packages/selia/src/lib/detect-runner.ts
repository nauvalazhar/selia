export function detectRunner() {
  const userAgent = process.env.npm_config_user_agent || '';
  if (userAgent.includes('npx')) return 'npx';
  if (userAgent.includes('yarn')) return 'yarn';
  if (userAgent.includes('pnpm')) return 'pnpx';
  if (userAgent.includes('bun')) return 'bunx';

  return 'unknown';
}
