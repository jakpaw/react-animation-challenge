import React from 'react';
import styles from './SeriesThumbnail.module.scss';

export interface SeriesThumbnailProps {}

const SeriesThumbnail: React.FC<SeriesThumbnailProps> = (props) => {
  return (
    <div className={styles['series-thumbnail']}>
      <div className={styles['series-thumbnail__title']}>
        The Handmaid's Tale
      </div>
      <div className={styles['series-thumbnail__main-text']}>
        Rated by a friend
      </div>
      <div className={styles['series-thumbnail__sub-text']}>3 Seasons</div>
    </div>
  );
};

export default SeriesThumbnail;
