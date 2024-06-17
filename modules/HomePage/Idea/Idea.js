import classes from './idea.module.scss';
import AnchorUI from '@/ui/HomePage/Links/AnchorUI';
import initTranslations from '@/app/i18n';
import Image from 'next/image';
import waves from '../../../images/HomePage/waves.webp';
import wavesMobile from '../../../images/HomePage/wavesMobile.webp';

const Idea = async ({ locale }) => {
  const { t, resources } = await initTranslations(locale, ['start', 'main']);

  return (
<></>
  );
};

export default Idea;
