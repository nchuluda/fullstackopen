const CountryProfile = ({ country }) => {
    const languages = Object.values(country.languages)
    return (
        <>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h4>languages:</h4>
            
            <ul>
                {languages.map(lang =>
                    <li key={lang}>{lang}</li>
                )}
            </ul>

            <img src={country.flags.png} width="150px" />
        </>
    )
}

export default CountryProfile