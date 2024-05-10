import { Field, ErrorMessage } from 'formik';

const ContactBlockInput = ({
  classes,
  htmlFor,
  error,
  touched,
  id,
  t,
  name,
  placeholder,
  label,
}) => {
  return (
    <div className={classes.input_name}>
      <label
        htmlFor={htmlFor}
        className={`${classes.disable} ${error && touched ? classes.label_error : ''}`}
      >
        {t(label)}
      </label>
      <Field
        id={id}
        className={`${classes.input} ${error && touched ? classes.error_name : ''}`}
        type='text'
        name={name}
        placeholder={t(placeholder)}
      />
      <ErrorMessage
        name={name}
        className={classes.error_required_name}
        component={'div'}
      />
    </div>
  );
};

export default ContactBlockInput;
