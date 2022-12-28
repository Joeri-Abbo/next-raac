const {i18n} = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/, use: ["@svgr/webpack"]
        });

        return config;
    }, reactStrictMode: true,

    images: {
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
