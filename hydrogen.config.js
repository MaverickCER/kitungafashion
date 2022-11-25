import {CookieSessionStorage, defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    showQueryTiming: true,
    storeDomain:
      // @ts-ignore kitunga-fashion.myshopify.com
      Oxygen?.env?.PUBLIC_STORE_DOMAIN,
    storefrontToken:
      // @ts-ignore Storefront API access token
      Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN,
    privateStorefrontToken:
      // @ts-ignore Admin API access token
      Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-10',
    // @ts-ignore
    storefrontId: process?.env?.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
