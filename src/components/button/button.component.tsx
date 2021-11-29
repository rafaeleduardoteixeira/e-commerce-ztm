// INTERFACES
import IButton from '../../interface/button.interface';

// STYLES
import './button.styles.scss';

const Button = ({
  children,
  type = 'button',
  onClick,
}: IButton): JSX.Element => (
  <button className="custom-button" type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
