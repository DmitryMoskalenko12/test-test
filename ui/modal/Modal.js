import classes from './modal.module.scss';

const Modal = ({ removeNotification, notification, notificationText }) => {
  return (
    <div className={classes.modal} onClick={removeNotification}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <button className={classes.close} onClick={removeNotification}>
          &times;
        </button>
        <h2 className={classes.title}>{notification}</h2>
        <p className={classes.text}>{notificationText}</p>
      </div>
    </div>
  );
};

export default Modal;
