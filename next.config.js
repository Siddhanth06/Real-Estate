const { redirect } = require("next/dist/server/api-utils");

module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/houses",
        destination:"/",
        permanent:true,
      }
    ];
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
