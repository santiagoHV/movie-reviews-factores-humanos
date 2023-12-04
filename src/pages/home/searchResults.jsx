import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { backend_url } from '../../constants'
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import LoadingIcon from "../../components/loadingIcon/loadingIcon"

const SearchResults = () => {
    const location = useLocation()
    const searchTerms = new URLSearchParams(location.search).get('terms');
    const [results, setResults] = useState()
    useEffect(() => {
        const fetchResults = async (searchTerms) => {
            const response = await fetch(`${backend_url}/api/movies?search=${searchTerms}`)
            if (!response.ok) {
                console.log(response.statusText);
            }
            const data = await response.json()
            setResults(data)
        }
        searchTerms ? fetchResults(searchTerms) : null
    }, [searchTerms])
    return (
        <>
            {results ? (
                <section>
                    <h2 >Resultados para: {searchTerms}</h2>
                    <CarouselCard movies={results} />
                </section>
            ) : <LoadingIcon />}
        </>
    )
}

export default SearchResults