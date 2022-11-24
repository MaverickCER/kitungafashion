import {CookieSessionStorage, defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    showQueryTiming: true,
    // @ts-ignore kitunga-fashion.myshopify.com
    storeDomain: Oxygen?.env?.PUBLIC_STORE_DOMAIN,
    // @ts-ignore Storefront API access token
    storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN,
    // @ts-ignore Admin API access token
    privateStorefrontToken: Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    // @ts-ignore
    storefrontApiVersion: '2022-10',
    // @ts-ignore
    storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
