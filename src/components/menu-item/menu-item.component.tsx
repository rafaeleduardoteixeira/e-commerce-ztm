// STYLES
import './menu-item.styles.scss';

// INTERFACE
import IMenu from '../../interface/menu.interface';

const MenuItem = ({ title, subtitle, imageURL, size }: IMenu): JSX.Element => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
