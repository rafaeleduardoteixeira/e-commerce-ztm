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
    {MenuItensConstant.map((itemMenu: IMenu) => (
      <MenuItens title={itemMenu.title} subtitle={itemMenu.subtitle} />
    ))}
  </div>
);

export default Directory;
