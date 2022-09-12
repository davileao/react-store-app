import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    default: ''

}

const Button = ({buttonType, children, onClick, ...otherProps }) => (
    <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        onClick={onClick}
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;