import { PageProps, fetchServerSideProps } from '@site/utilities/deps';
import { StoreLayout } from '@site/layouts/StoreLayout';
import { HeroSection } from '@site/sections/HeroSection';
import { ProductListSection, fetchProductListSection } from '@site/sections/ProductListSection';

export const getStaticProps = fetchServerSideProps(async () => {
  return {
    props: {
      data: {
        productListSection: await fetchProductListSection(),
      },
    },
    revalidate: 60,
  };
});

export default function Page(props: PageProps<typeof getStaticProps>) {
  return (
    <StoreLayout>
      <HeroSection />
      <ProductListSection data={props.data.productListSection} />
    </StoreLayout>
  );
}
