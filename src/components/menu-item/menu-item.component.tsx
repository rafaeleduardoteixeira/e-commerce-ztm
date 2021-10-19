import { useHistory } from 'react-router-dom';

// STYLES
import './menu-item.styles.scss';

// INTERFACE
import IMenu from '../../interface/menu.interface';

const MenuItem = ({
  title,
  subtitle,
  imageURL,
  linkURL,
}: IMenu): JSX.Element => {
  const history = useHistory();

  return (
    <div className="menu-item" onClick={() => history.push(`/${linkURL}`)}>
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
};

export default MenuItem;
