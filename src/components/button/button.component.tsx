// INTERFACES
import IButton from '../../interface/button.interface';

// STYLES
import './button.styles.scss';

const Button = ({ children, type = 'button' }: IButton): JSX.Element => (
  <button className="custom-button" type={type}>
    {children}
  </button>
);

export default Button;
