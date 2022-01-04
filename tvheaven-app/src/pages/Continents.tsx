import {FC } from 'react'
import ContinentList from '../components/Continents/ContinentList'
import { CharacterProvider } from '../context/CharacterContext'

const Continents : FC = () => {
  return (
    <div>
        <h1>These are some of the different continents in this universe</h1>
        <CharacterProvider>
          < ContinentList />
        </CharacterProvider>
    </div>
  )
}

export default Continents
