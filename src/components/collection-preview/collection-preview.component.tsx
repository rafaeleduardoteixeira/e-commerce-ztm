// INTERFACES
import { IShopData } from '../../interface/shopData.interface';

// COMPONENTS
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ id, title, items }: IShopData): JSX.Element => (
  <div className="collection-preview" key={id}>
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem
            key={item.id}
            id={item.id}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price}
          />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
