import { FC, useContext} from 'react';
import CharacterContext from '../../context/CharacterContext';
import { IContinent } from '../../interfaces/IContinent';
import { CharacterContextType } from '../../types/CharacterContextType';
import ContinentItem from './ContinentItem';


const ContinentList: FC = () => {

    const {continents} =  useContext(CharacterContext) as CharacterContextType;

    const createContinentList = () => {
        return continents.map ((continent: IContinent, key: number) => {
            return(
                <ContinentItem 
                    key={key}
                    id={continent.id}
                    description={continent.description}
                    name={continent.name}
                />
            )
        })
    }

    return (
        <div className="test">
            {createContinentList()}
        </div>
    )
}

export default ContinentList;