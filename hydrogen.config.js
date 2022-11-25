import {CookieSessionStorage, defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    showQueryTiming: true,
    // @ts-ignore kitunga-fashion.myshopify.com
    storeDomain:
      // @ts-ignore kitunga-fashion.myshopify.com
      process?.env?.PUBLIC_STORE_DOMAIN || 'kitunga-fashion.myshopify.com',
    storefrontToken:
      // @ts-ignore Storefront API access token
      process?.env?.PUBLIC_STOREFRONT_API_TOKEN ||
      'ca98d85ce20cc11c0e28cafc6e70b68b',
    privateStorefrontToken:
      // @ts-ignore Admin API access token
      process?.env?.PRIVATE_STOREFRONT_API_TOKEN ||
      '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',
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
