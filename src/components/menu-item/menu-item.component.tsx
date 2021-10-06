// STYLES
import './menu-item.styles.scss';

// INTERFACE
import IMenu from '../../interface/menu.interface';

const MenuItem = ({ title, subtitle }: IMenu): JSX.Element => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
