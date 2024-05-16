const nextConfig = {
  swcMinify: true,
  // output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', '*'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        // api/seoul/json/LOCALDATA_020301_${var}/1/50/01
        source: '/api/map/map',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}`,
      },
      {
        source: '/api/map/map',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}`,
      },
      {
        source: '/api/serverReq/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
