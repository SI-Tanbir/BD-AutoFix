/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disables ESLint during builds
  },

    images: {
      remotePatterns: [
        {
          protocol: 'https', // Use 'https' or 'http'
          hostname: '**',    // Use '**' to match any hostname or specify a domain like 'example.com'
          port: '',          // Leave empty if no specific port is used
          pathname: '/**',   // Match all paths
        },
      ],
    },
  };
  
  export default nextConfig;
  