/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        const alias = {...config.resolve.alias}

        delete alias.url // alias to native-url

        return config;
    },
    reactStrictMode: true,

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
                pathname: '/random/**',
            },
        ],
    },
}

module.exports = nextConfig
