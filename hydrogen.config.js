import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountry: 'US',
    defaultLanguage: 'EN',
    defaultLocale: 'en-US',
    storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN,
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN,
    privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-10',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
