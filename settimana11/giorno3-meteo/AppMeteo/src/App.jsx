import { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import DatiTempo from './components/DatiTempo'

function App() {

  const [newCitta, setNewCitta] = useState('Bologna')

  const newName = (data) => {
    setNewCitta(data)
  }

  const [dati, setDati] = useState([])
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${newCitta}&appid=7c48ada1d0831c1f833c11567a35921c`
  const urlNextDay = 'https://api.openweathermap.org/data/2.5/forecast?q=Bologna&appid=7c48ada1d0831c1f833c11567a35921c'

  const fetchData = async () => {
      try{
          const risposta = await fetch(url)
          if(risposta.ok){
              let data = await risposta.json()
              setDati(data)
              console.log(dati);
          } else {
              console.log('errore nella risposta fetch');
          }
      }
      catch(error){
          console.log('L\'errore è' + error);
      }
  }

  useEffect(() => { 
      fetchData()
  }, [])

  return (
    <>
      <Search newName={newName}></Search>
      <DatiTempo dati={dati?.dati} />
    </>
  )
}

export default App
