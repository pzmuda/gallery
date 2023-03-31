import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Image } from '../../../interface/type';
import Loader from '../../molecules/Loader/Loader';
import Aniaml from '../../organisms/Animal/Animal';
import styles from './gallery.module.scss';
import { TbDog, TbCat } from 'react-icons/tb';
import { CAT_URL, DOG_URL, ANIMALS, config } from './galleryUtils';

type props = {
  onClick: (fav: Image) => void;
  onRemove: (fav: Image) => void;
};

const Gallery = ({ onClick, onRemove }: props) => {
  const lastItemRef = useRef(null);
  const observer: React.MutableRefObject<any> = useRef(null);
  const [items, setItems] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [active, setActive] = useState({ cat: false, dog: false });

  const fetchData = async () => {
    await axios
      .get(url, config)
      .then((res) => {
        setItems([...items, ...res.data]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getMoreImage = useCallback(() => {
    if (isLoading || items.length === 50) return;
    setPage((prev) => prev + 1);
    setIsLoading(true);
    fetchData();
  }, [isLoading, items]);

  useEffect(() => {
    if (url) {
      setIsLoading(true);
      fetchData();
    }
  }, [url]);

  useEffect(() => {
    const options = {
      root: document,
      threshold: 0,
    };
    const callback = (entries: any) => {
      if (entries[0].isIntersecting) {
        getMoreImage();
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [getMoreImage]);

  const renderGallery = items.map((data, i) => {
    if (i === items.length - 1) {
      return (
        <Aniaml
          photo={data}
          key={data.id}
          ref={lastItemRef}
          onClick={onClick}
          onRemove={onRemove}
        />
      );
    }
    return (
      <Aniaml
        photo={data}
        key={data.id}
        onClick={onClick}
        onRemove={onRemove}
      />
    );
  });

  const handleSelect = (option: string) => {
    if (option === ANIMALS.cat) {
      setItems([]);
      setUrl(CAT_URL(page));
      setActive({ cat: true, dog: false });
    } else {
      setItems([]);
      setUrl(DOG_URL(page));
      setActive({ cat: false, dog: true });
    }
  };

  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div
            onClick={() => handleSelect(ANIMALS.cat)}
            className={`${styles.btn} ${active.cat && styles.btn_active}`}
          >
            <TbCat />
          </div>
          <div
            onClick={() => handleSelect(ANIMALS.dog)}
            className={`${styles.btn} ${active.dog && styles.btn_active}`}
          >
            <TbDog />
          </div>
        </div>
        <div className={styles.gallery}>{renderGallery}</div>
      </main>
      {isLoading ? <Loader /> : null}
    </>
  );
};

export default Gallery;
