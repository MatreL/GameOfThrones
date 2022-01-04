import {FC} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AllCharacters, CreateCharacter, Continents, DetailsPage } from '../pages';
import MainNavigation from '../components/Shared/MainNavigation';
import { Container } from 'react-bootstrap';

const Routing : FC = () => {
  return (
    <BrowserRouter>
    <MainNavigation/>
      <Container>
      <Routes>
        <Route path= "/" element={<AllCharacters />}></Route> 
        <Route path= "create-characters" element={<CreateCharacter />}></Route> 
        <Route path= "continents" element={<Continents />}></Route> 
        <Route path= "character-details/:id" element={<DetailsPage />}></Route> 
      </Routes>
      </Container>
    
    </BrowserRouter>
  )
}

export default Routing
