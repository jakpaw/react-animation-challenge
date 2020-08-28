import React, { useState } from 'react';

import styles from './SeriesList.module.scss';
import SeriesThumbnail from './SeriesThumbnail';
import SeriesDetails from './SeriesDetails';

export interface SeriesListProps {}

const SeriesList: React.FC<SeriesListProps> = (props) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailsInitialCoordinates, setDetailsInitialCoordinates] = useState<
    DOMRect
  >();

  const openDetails = (coordinates: DOMRect) => {
    setDetailsOpen(true);
    setDetailsInitialCoordinates(coordinates);
  };

  return (
    <>
      <div className={styles['series-list']}>
        <div className={styles['series-list__top-bar']}>
          <h2 className={styles['series-list__header']}>Series for you</h2>
          <div className={styles['series-list__see-all']}>See all 10</div>
        </div>
        <div className={styles['series-list__thumbnails']}>
          <SeriesThumbnail onClick={openDetails} />
          <SeriesThumbnail onClick={openDetails} />
          <SeriesThumbnail onClick={openDetails} />
          <SeriesThumbnail onClick={openDetails} />
          <SeriesThumbnail onClick={openDetails} />
        </div>
      </div>
      <SeriesDetails
        isOpen={detailsOpen}
        initialCoordinates={detailsInitialCoordinates}
        onRequestClose={() => setDetailsOpen(false)}
      />
    </>
  );
};

export default SeriesList;
