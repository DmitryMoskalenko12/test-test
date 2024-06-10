import classes from './loading-form-spinner.module.scss';
import Spinner from '../Spinner/Spinner';

const LoadingFormSpinner = () => {
  return (
    <div className={classes.loading}>
      <Spinner />
    </div>
  );
};

export default LoadingFormSpinner;
