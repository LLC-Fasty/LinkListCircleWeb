/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "zpvzqiovwhagpurqfsky.supabase.co",
            port: ""
          },
        ],
      },
};

export default nextConfig;
