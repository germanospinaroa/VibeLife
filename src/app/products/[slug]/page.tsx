import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { ProductBreadcrumb } from "@/components/product/product-breadcrumb";
import { ProductAudience } from "@/components/product/product-audience";
import { ProductBenefits } from "@/components/product/product-benefits";
import { ProductCta } from "@/components/product/product-cta";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLifestyle } from "@/components/product/product-lifestyle";
import { ProductOverview } from "@/components/product/product-overview";
import { RelatedProducts } from "@/components/product/related-products";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.heroDescription.es,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="px-3 pt-6">
        <PageContainer className="max-w-[84rem] px-0">
          <ProductBreadcrumb product={product} />
        </PageContainer>
      </section>

      <ProductHero product={product} />
      <ProductOverview product={product} />
      <ProductLifestyle product={product} />
      <ProductBenefits product={product} />
      <ProductAudience product={product} />
      <RelatedProducts product={product} />
      <ProductCta product={product} />
    </>
  );
}
