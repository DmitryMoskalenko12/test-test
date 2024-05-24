import { Field, ErrorMessage } from 'formik';

const ContactInputBlock = ({
  classes,
  error,
  touched,
  t,
  name,
  placeholder,
  type,
}) => {
  return (
    <div className={classes.inputWrapper}>
      <Field
        className={`${classes.input} ${error && touched ? classes.error : ''}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        className={classes.error_required}
        component={'div'}
      />
    </div>
  );
};

export default ContactInputBlock;
