import React from 'react';
import styles from './notFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.notFoundBlock__container}>
      <span>🙁</span>
      <h2>Ничего не найдено</h2>
      <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
}

export default NotFoundBlock;
