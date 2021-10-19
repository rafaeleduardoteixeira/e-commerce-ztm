import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

// UTILS
import { db } from '../../util/initializeFireBase';

// STYLES
import './directory.styles.scss';

// INTERFACE
import IMenu from '../../interface/menu.interface';

// COMPONENTS
import MenuItens from '../menu-item/menu-item.component';

const Directory = (): JSX.Element => {
  const [menuCategories, setMenuCategories] = useState<IMenu[]>([]);

  const fetchCategories = async () => {
    const querySnapshot = await getDocs(collection(db, 'menu'));
    const menu: IMenu[] = [];
    querySnapshot.forEach(doc => {
      menu.push({
        title: doc.data().title,
        subtitle: doc.data().subtitle,
        imageURL: doc.data().imageURL,
        linkURL: doc.data().linkURL,
      });
    });
    setMenuCategories(menu);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="directory-menu">
      {menuCategories.map((itemMenu: IMenu, key: number) => (
        <MenuItens
          key={key}
          title={itemMenu.title}
          subtitle={itemMenu.subtitle}
          imageURL={itemMenu.imageURL}
          linkURL={itemMenu.linkURL}
        />
      ))}
    </div>
  );
};

export default Directory;
