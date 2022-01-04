import {FC, useState, ChangeEvent} from 'react'
import { GameOfThronesService } from '../../services/GameOfThronesService';
import { ICharacter } from '../../interfaces/ICharacter';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const CreateCharacterFrom : FC = () => {

  const navigate = useNavigate();

  const [newCharacter, setNewCharacter] = useState<ICharacter>({name: "", title: "",family: "", image: "", description: "" });

  const [newFile, setNewFile] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let {name } = event.target;
    let { value } = event.target;

    switch (name) {
      case "name":
          setNewCharacter( { ...newCharacter, name: value } );
        break;
      case "title":
        setNewCharacter({ ...newCharacter, title: value})
        break;
      case "family":
        setNewCharacter({ ...newCharacter, family: value})
        break;
      case "description":
          setNewCharacter({ ...newCharacter, description: value})
        break;
      case "image":
        let {files} = event.target;
        if(files){
          setNewCharacter( {...newCharacter, image: files[0].name } );
          setNewFile(files[0] );
        }
        break;
    }
  }

  const handleNewCharacter = ( ) => {
    GameOfThronesService.postNewCharacter(newCharacter, newFile as File);
    alert("Character added!")
    navigate('/')
  }

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" placeholder="Enter Title" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFamily">
          <Form.Label>Family</Form.Label>
          <Form.Control name="family" type="text" placeholder="Enter Family name" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" placeholder="Enter Description" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" type="file" placeholder="Image" onChange={handleChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleNewCharacter}>Add character</Button>
          </Form>
          </div>

    
    
  )
}

export default CreateCharacterFrom
