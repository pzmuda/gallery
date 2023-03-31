import { Spinner } from 'react-bootstrap';
import styles from './loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.txt}>Loading</div>
      <div className={styles.spinners}>
        <Spinner animation='grow' size='sm' />
        <Spinner animation='grow' size='sm' />
        <Spinner animation='grow' size='sm' />
      </div>
    </div>
  );
}

export default Loader;