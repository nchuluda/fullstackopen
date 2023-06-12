import { useState, useEffect } from 'react'
import Country from './components/Country'
import countryService from './services/country'


const App = (props) => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService
    .getAll()
    .then(initialCountries => {
      setCountries(initialCountries)
    })
}, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const showCountry = (country) => {
    setFilter(country)
  }

  const countriesToShow = (filter.length > 0) 
  ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  : countries

  return (
    <>
      <div>
        find countries <input
            value={filter}
            onChange={handleFilterChange}
          />
      </div>

      <Country countriesToShow={countriesToShow} showCountry={showCountry} />

      
    </>
      
  )
}

export default App
