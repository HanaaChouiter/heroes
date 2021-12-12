import { createContext, useState, useEffect } from "react"

const HeroesContext = createContext({})

const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([])
  const [newHero, setNewHero] = useState(null)
  const [hero, setHero] = useState([])
 
  useEffect(() => {
    getHeroes();
  }, [])
  
  const getHeroes = () => {
    fetch('http://localhost:5000/heroes')
      .then(response => response.json())
      .then(data => setHeroes(data))
  }

  const value = {
    heroes,
    getHeroes,
    newHero,
    setNewHero,
    hero,
    setHero,
  }

  return (
    <HeroesContext.Provider value={value}>
      {children}
    </HeroesContext.Provider>
  )
}

export {
  HeroesContext,
  HeroesProvider
}