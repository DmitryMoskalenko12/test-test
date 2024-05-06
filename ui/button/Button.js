import classes from './button.module.scss';

const Button = ({children}) => {
    return <button type='submit' className={classes.button}>{children}</button>
}

export default Button;