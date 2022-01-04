import { FC } from 'react';
import { ICharacter } from '../../interfaces/ICharacter';
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap';


const CharacterItem : FC<ICharacter>  = ({id, name, image, family }) => {

    return (
        <Card style={{ width: '18rem', height:'25rem', marginBottom:'3rem'}}>
            <Link style={{textDecoration: "none", color: "black"}} to={`/character-details/${id}`}>
            <Card.Img variant="top" alt={`${image}`} style={{ height: 300}} src={`https://localhost:5001/images/${image}`}/>
            <Card.Body>
                <Card.Title>{name}, House of {family}</Card.Title>
            </Card.Body>
            </Link>
        </Card>

    )
}

export default CharacterItem;