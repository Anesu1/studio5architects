import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  webpack(config, { webpack: wp }) {
    // React 19's index.js uses a conditional CJS require that webpack can't
    // statically analyze for named exports. Sanity packages import
    // useEffectEvent from react which triggers a false-positive build error.
    // Replace react ONLY for sanity/vision package imports with an ESM shim
    // that explicitly declares all named exports. React-dom and framework
    // code keep the original react so ReactSharedInternals stays consistent.
    const shimPath = path.resolve('./react-shim.mjs');
    config.plugins.push(
      new wp.NormalModuleReplacementPlugin(/^react$/, (resource: { contextInfo?: { issuer?: string }; request: string }) => {
        const issuer = resource.contextInfo?.issuer ?? '';
        if (
          issuer.includes('sanity') ||
          issuer.includes('@sanity') ||
          issuer.includes('next-sanity')
        ) {
          resource.request = shimPath;
        }
      })
    );
    return config;
  },
};

export default nextConfig;
