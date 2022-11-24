import {Layout, NotFound} from '~/components/index.server';
import {
  Seo,
  ShopifyAnalyticsConstants,
  gql,
  useLocalization,
  useServerAnalytics,
  useShopQuery,
} from '@shopify/hydrogen';

import GoogleForm from '../../components/GoogleForm.client';
import {PageHeader} from '~/components';
import {Suspense} from 'react';

export default function Page({params}) {
  const {
    language: {isoCode: languageCode},
  } = useLocalization();

  const {handle} = params;
  const {
    data: {page},
  } = useShopQuery({
    query: PAGE_QUERY,
    variables: {languageCode, handle},
  });

  if (!page) {
    return <NotFound />;
  }

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.page,
      resourceId: page.id,
    },
  });

  return (
    <Layout>
      <Suspense>
        <Seo type="page" data={page} />
      </Suspense>
      <PageHeader heading={page.title}>
        {page.title === 'About Kitunga Fashion' ? (
          <>
            <div>
              <p>About Kitunga Fashion page</p>
            </div>
          </>
        ) : page.title === 'Contact Us' ? (
          <GoogleForm />
        ) : (
          <div dangerouslySetInnerHTML={{__html: page.body}} />
        )}
      </PageHeader>
    </Layout>
  );
}

const PAGE_QUERY = gql`
  query PageDetails($languageCode: LanguageCode, $handle: String!)
  @inContext(language: $languageCode) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;
