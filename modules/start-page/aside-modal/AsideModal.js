import classes from './aside-modal.module.scss';
import FormContent from '@/components/start-page/form-content/FormContent';

const AsideModal = ({ close }) => {
  return (
    <div onClick={() => close(null)} className={classes.modal}>
      <FormContent close={close} />
    </div>
  );
};

export default AsideModal;
