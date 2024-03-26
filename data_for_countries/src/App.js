import { useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filteredcountries, setFilteredcountries] = useState([]);

  const hook = () => {
    // console.log('effect')
    const eventHandler = (response) => {
      // console.log('promise fulfilled')
      setCountries(response.data)
    }
    const promise = axios.get('https://restcountries.com/v3.1/all')
    // console.log(countries)
    promise.then(eventHandler)
  }

  useEffect(hook, [])

  return (
  <div>
    <Filter setFilteredcountries={setFilteredcountries} countries={countries}/>
    <Countries filteredcountries={filteredcountries} />
  </div>
  );
}

export default App;
