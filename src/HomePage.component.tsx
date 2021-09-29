// STYLES
import './HomePage.styles.scss';

// INTERFACE
import IMenu from './interface/menu.interface';

// CONSTANTS
import MenuItens from './constants/menu.constant';

const HomePage = (): JSX.Element => (
  <div className="homepage">
    <div className="directory-menu">
      {MenuItens.map((itemMenu: IMenu) => (
        <div className="menu-item">
          <div className="content">
            <h1 className="title">{itemMenu.title}</h1>
            <span className="subtitle">{itemMenu.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
