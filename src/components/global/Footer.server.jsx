import {CountrySelector, FooterMenu, Heading, Section} from '~/components';

import {useUrl} from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <div
      className={`self-end opacity-50 pb-8 px-6 md:px-8 lg:px-12`}
    >
      &copy; {new Date().getFullYear()} Kitunga Fashion
    </div>
  );
}
