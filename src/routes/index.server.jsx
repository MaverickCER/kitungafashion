import {
  CacheLong,
  Seo,
  ShopifyAnalyticsConstants,
  gql,
  useServerAnalytics,
  useShopQuery,
} from '@shopify/hydrogen';

import Facebook from '../assets/Facebook.png';
import {HomeSlider} from '~/components';
import Instagram from '../assets/Instagram.png';
import {Layout} from '~/components/index.server';
import {Link} from '@shopify/hydrogen';
import {Suspense} from 'react';
import TikTok from '../assets/TikTok.png';
import Twitter from '../assets/Twitter.png';
import YouTube from '../assets/YouTube.png';

export default function Homepage() {
  useServerAnalytics({
    shopify: {
      canonicalPath: '/',
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {
  return (
    <>
      <HomeSlider />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '8px auto'
        }}
      >
        <Link
          to="/products"
          style={{
            display: 'block',
            width: 'fit-content',
            margin: '8px auto !important',
            padding: '8px 32px',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '8px',
          }}
        >
          Shop Now →
        </Link>
      </div>
      <p style={{textAlign: 'center'}}>↓ Visit Our Social Accounts ↓</p>
      <div className="social-icons">
        <a href="abc" target="_blank" rel="noreferrer noopener">
          <img
            src={Facebook}
            alt="link to social media profile for Kitunga Fashion at Facebook"
          />
        </a>
        <a href="abc" target="_blank" rel="noreferrer noopener">
          <img
            src={Instagram}
            alt="link to social media profile for Kitunga Fashion at Instagram"
          />
        </a>
        <a href="abc" target="_blank" rel="noreferrer noopener">
          <img
            src={TikTok}
            alt="link to social media profile for Kitunga Fashion at TikTok"
          />
        </a>
        <a href="abc" target="_blank" rel="noreferrer noopener">
          <img
            src={Twitter}
            alt="link to social media profile for Kitunga Fashion at Twitter"
          />
        </a>
        <a href="abc" target="_blank" rel="noreferrer noopener">
          <img
            src={YouTube}
            alt="link to social media profile for Kitunga Fashion at YouTube"
          />
        </a>
      </div>
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: name,
        description,
        titleTemplate: '',
      }}
    />
  );
}

/**
 * The homepage content query includes a request for custom metafields inside the alias
 * `heroBanners`. The template loads placeholder content if these metafields don't
 * exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_secondary  File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

const HOMEPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
