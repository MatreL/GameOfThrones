import { FC, useContext } from 'react';
import CharacterContext from '../../context/CharacterContext';
import { ICharacter } from '../../interfaces/ICharacter';
import { CharacterContextType } from '../../types/CharacterContextType';
import CharacterItem from './CharacterItem';
import { Col, Row } from 'react-bootstrap';



const CharacterList: FC = () => {

    const {characters} =  useContext(CharacterContext) as CharacterContextType;

    const createCharacterList = () => {
        return characters.map ((character: ICharacter, key: number) => {
            return(
                <Col md={6} lg={4} xl={3} key={key}>
                <CharacterItem 
                    key={key}
                    id={character.id}
                    title={character.title}
                    family={character.family}
                    description={character.description}
                    name={character.name}
                    image={character.image}
                />
                 </Col>
            )
        })
    }

    return (
        <Row>
            {createCharacterList()}
        </Row>
    )
}

export default CharacterList;