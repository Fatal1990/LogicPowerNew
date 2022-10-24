import {resolve} from 'path'

const myResolve = (path) => {
    return resolve(__dirname, path)
}

export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'logicPower-nuxt',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    
    alias: {
        '@components': myResolve('./components'),
        '@services': myResolve('./services'),
        '@shared': myResolve('./_shared'),
        '@models': myResolve('./models'),
        '@style': myResolve('./assets/style'),
    },
    
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        './_shared/assets/scss/abstract/index.scss',
        './assets/scss/style.scss',
    ],
    
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/globalTools.ts'
    ],
    
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build'
    ],
    
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources'
    ],
    
    //You will have to add this new object if it doesn't exist already
    styleResources: {
        scss: [
            './_shared/assets/scss/abstract/index.scss',
        ]
    },
    
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000:
        // https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },
    
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            sass: {
                implementation: require('sass'),
                sourceMap: false
            },
            scss: {
                implementation: require('sass'),
                sourceMap: false
            },
        },
    }
}
