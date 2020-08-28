import React, { MouseEvent, useRef } from 'react';
import styles from './SeriesThumbnail.module.scss';

export interface SeriesThumbnailProps {
  onClick: (coordinates: DOMRect) => void;
}

const SeriesThumbnail: React.FC<SeriesThumbnailProps> = ({ onClick }) => {
  const imageElement = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    onClick(imageElement.current!.getBoundingClientRect());
  };

  return (
    <>
      <div className={styles['series-thumbnail']} onClick={handleClick}>
        <div className={styles['series-thumbnail__image']} ref={imageElement}>
          <div className={styles['series-thumbnail__title']}>
            The Handmaid's Tale
          </div>
        </div>
        <div className={styles['series-thumbnail__main-text']}>
          Rated by a friend
        </div>
        <div className={styles['series-thumbnail__sub-text']}>3 Seasons</div>
      </div>
    </>
  );
};

export default SeriesThumbnail;
