import CountryProfile from "./CountryProfile"

const Country = ({ countriesToShow }) => {
    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many results. Please use a different filter
            </div>
        )
    }

    if (countriesToShow.length === 1) {
        return (
                <CountryProfile country={countriesToShow[0]} />
        )
    }

    return (
        <>
        {countriesToShow.map(country => 
          <div key={country.name.official}>{country.name.common}</div>)}
        </>
    )
}

export default Country