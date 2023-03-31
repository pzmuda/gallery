import styles from './animal.module.scss'
import React, { useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { Image } from '../../../interface/type';

type props = {
  photo: Image;
  fav?: boolean;
  onClick?: any;
  onRemove?: any;
};

const Aniaml = React.forwardRef(
  (
    { photo, onClick,onRemove, fav = false }: props,
    ref: React.LegacyRef<HTMLDivElement> | undefined
  ) => {

    const [active, setActive] = useState(fav);

    const handleClick = () => {
      if (!active) {
        onClick(photo);
      } else {
        onRemove(photo);
      }
      setActive(!active);
    };

    return (
        <div className={styles.container} ref={ref}>
          <img src={photo.url} alt={photo.url} className={styles.item} />
          {!active ? (
            <AiOutlineHeart onClick={handleClick} className={styles.btn} />
          ) : (
            <AiTwotoneHeart onClick={handleClick} className={styles.btn} />
          )}
        </div>
    );
  }
);

export default Aniaml;
