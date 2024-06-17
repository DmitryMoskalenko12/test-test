import { productsArr } from "@/helpers/HomePage/products-data";
import DescriptionSection from "@/modules/ProductPage/DescriptionSection/DescriptionSection";
import StagesSection from "@/modules/ProductPage/StagesSection/StagesSection";
import Result from "@/modules/ProductPage/Result/Result";
import ProjectSummary from "@/modules/ProductPage/ProjectSummary/ProjectSummary";
import MoreProjects from "@/modules/ProductPage/MoreProjects/MoreProjects";
import Contact from "@/modules/HomePage/Contact/Contact";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/TranslationsProvider";
import NotFound from "../[...notFound]/page";

export async function generateMetadata({ params: {locale, id} }) {
  const { t, resources } = await initTranslations(locale, ['main', 'start']);
  const product = productsArr(t).find(item => String(item.id) === id);

  return {
    title: `Uviten | ${product.title}`,
  }
}

const ProductPage = async ({ params: { locale, id } }) => {
    const { t, resources } = await initTranslations(locale, ['main', 'start']);
    const product = productsArr(t).find(item => String(item.id) === id);

    if (!product) {
      return <NotFound params={locale}/>
    }

    return <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={['main', 'start']}
          >
             <DescriptionSection locale = {locale} product = {product}/>
             <StagesSection locale = {locale} product = {product}/>
             <Result locale = {locale} product = {product}/>
             <ProjectSummary locale = {locale} product = {product}/>
             <MoreProjects product = {product} locale = {locale}/>
             <Contact locale={locale}/>
           </TranslationsProvider>
}

export default ProductPage;