// INTERFACES
import { IShopDataItems } from '../../interface/shopData.interface';

import './collection-item.styles.scss';

const CollectionItem = ({
  id,
  name,
  imageURL,
  price,
}: IShopDataItems): JSX.Element => (
  <div className="collection-item" key={id}>
    <div className="image" style={{ backgroundImage: `url(${imageURL})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
