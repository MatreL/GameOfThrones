import { FC, useState } from 'react';
import { IContinent } from '../../interfaces/IContinent';
import { IRegion } from '../../interfaces/IRegion';

const ContinentItem  : FC <IContinent> = ({id, name, regions, description}) => {

  const [continent] = useState<IContinent>();

  const createRegionList = () => {
      return continent?.regions?.map(( region: IRegion, key: number ) => {
          return (
                  <li key={key}>{region.name}</li>
          )
      } );
  }

  return (
    <div>
      <h5>{name}</h5>
      <p>{description}</p>
      {createRegionList()}
    </div>
  )
}

export default ContinentItem
