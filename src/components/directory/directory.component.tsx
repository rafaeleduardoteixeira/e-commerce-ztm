// STYLES
import './directory.styles.scss';

// INTERFACE
import IMenu from '../../interface/menu.interface';

// CONSTANTS
import { MenuItens as MenuItensConstant } from '../../constants/menu.constant';

// COMPONENTS
import MenuItens from '../menu-item/menu-item.component';

const Directory = (): JSX.Element => (
  <div className="directory-menu">
    {MenuItensConstant.map((itemMenu: IMenu, key: number) => (
      <MenuItens
        key={key}
        title={itemMenu.title}
        subtitle={itemMenu.subtitle}
        imageURL={itemMenu.imageURL}
        size={itemMenu.size}
      />
    ))}
  </div>
);

export default Directory;
