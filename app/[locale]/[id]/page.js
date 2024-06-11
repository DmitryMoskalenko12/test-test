import { productsArr } from "@/helpers/HomePage/products-data";
import DescriptionSection from "@/modules/ProductPage/DescriptionSection/DescriptionSection";
import StagesSection from "@/modules/ProductPage/StagesSection/StagesSection";
import Result from "@/modules/ProductPage/Result/Result";
import ProjectSummary from "@/modules/ProductPage/ProjectSummary/ProjectSummary";
import MoreProjects from "@/modules/ProductPage/MoreProjects/MoreProjects";
import Contact from "@/modules/HomePage/Contact/Contact";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/TranslationsProvider";

const ProductPage = async ({ params: { locale, id } }) => {
    const { t, resources } = await initTranslations(locale, ['main', 'start']);
    const product = productsArr().find(item => String(item.id) === id);

    return <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={['main', 'start']}
          >
             <DescriptionSection product = {product}/>
             <StagesSection product = {product}/>
             <Result product = {product}/>
             <ProjectSummary/>
             <MoreProjects/>
             <Contact locale={locale}/>
           </TranslationsProvider>
}

export default ProductPage;