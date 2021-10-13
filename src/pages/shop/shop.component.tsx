// CONSTANTS
import { ShopData } from '../../constants/shopData.constant';

// COMPONENTS
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = (): JSX.Element => (
  <div className="shop-page">
    {ShopData.map(collection => (
      <CollectionPreview
        key={collection.id}
        id={collection.id}
        title={collection.title}
        routeName={collection.routeName}
        items={collection.items}
      />
    ))}
  </div>
);

export default ShopPage;
