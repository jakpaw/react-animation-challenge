import React from 'react';

import styles from './SeriesList.module.scss';
import SeriesThumbnail from './SeriesThumbnail';

export interface SeriesListProps {}

const SeriesList: React.FC<SeriesListProps> = (props) => {
  return (
    <div className={styles['series-list']}>
      <div className={styles['series-list__top-bar']}>
        <h2 className={styles['series-list__header']}>Series for you</h2>
        <div className={styles['series-list__see-all']}>See all 10</div>
      </div>
      <div className={styles['series-list__thumbnails']}>
        <SeriesThumbnail />
        <SeriesThumbnail />
        <SeriesThumbnail />
        <SeriesThumbnail />
        <SeriesThumbnail />
      </div>
    </div>
  );
};

export default SeriesList;
