import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/TranslationsProvider";
import { productsArr } from "@/helpers/HomePage/products-data";
import DescriptionSection from "@/modules/ProductPage/DescriptionSection/DescriptionSection";
import StagesSection from "@/modules/ProductPage/StagesSection/StagesSection";
import Result from "@/modules/ProductPage/Result/Result";
import ProjectSummary from "@/modules/ProductPage/ProjectSummary/ProjectSummary";
import MoreProjects from "@/modules/ProductPage/MoreProjects/MoreProjects";
import Contact from "@/modules/HomePage/Contact/Contact";
/* import NotFound from "../../[...notFound]/page"; */

/* export async function generateMetadata({ params: {locale, id} }) {
  const { t, resources } = await initTranslations(locale, ['main', 'start']);
  const product = productsArr(t).find(item => String(item.id) === id);

  return {
    title: `Uviten | ${product.title}`,
  }
} */

const ProjectsSinglePage = async ({ params: { locale, id } }) => {
    const { t, resources } = await initTranslations(locale, ['main', 'start']);
  /*   const product = productsArr(t).find(item => String(item.id) === id); */
    
 /*    if (!product) {
      return <NotFound params={locale}/>
    } */

    return <></> 
}

export default ProjectsSinglePage;