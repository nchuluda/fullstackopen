import CountryProfile from "./CountryProfile"

const Country = ({ countriesToShow, showCountry }) => {
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
            <div key={country.name.official}>
                {country.name.common}
                <button onClick={() => showCountry(country.name.common)}>show</button>
            </div>
        )}
        </>
    )
}

export default Country