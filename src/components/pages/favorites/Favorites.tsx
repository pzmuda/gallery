import Aniaml from "../../organisms/Animal/Animal";
import styles from './favorites.module.scss';
import { Image } from '../../../interface/type';

type props = {
  fav: Image[];
  onRemove: (fav: Image) => void;
};

const Favorites = ({ fav, onRemove }: props) => {
  const renderGallery = fav.map((data) => {
    return <Aniaml photo={data} key={data.id} onRemove={onRemove} fav />;
  });
  return <main className={styles.wrapper}>{renderGallery}</main>;
};

export default Favorites;