import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "react-bootstrap"
import { backend_url } from '../../constants'
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import LoadingIcon from "../../components/loadingIcon/loadingIcon"

const SearchResults = () => {
    const location = useLocation()
    const searchTerms = new URLSearchParams(location.search).get('terms');
    const [fetchedResults, setFetchedResults] = useState()
    const [orderedResults, setOrderedResuls] = useState()
    const [field, setField] = useState('rating')
    const [order, setOrder] = useState(1)
    useEffect(() => {
        const fetchResults = async (searchTerms) => {
            const response = await fetch(`${backend_url}/api/movies?search=${searchTerms}`)
            if (!response.ok) {
                console.log(response.statusText);
            }
            const data = await response.json()
            setFetchedResults(data.sort((a, b) => b.rating - a.rating))
        }
        searchTerms != null ? fetchResults(searchTerms) : null
    }, [searchTerms])



    useEffect(() => {
        const orderResults = (f) => {
            let filtered_results = []
            f == 'rating' ? filtered_results = [...fetchedResults].sort((a, b) => b.rating - a.rating) :
                f == 'date' ? filtered_results = [...fetchedResults].sort((a, b) => new Date(a.year) - new Date(b.year)) :
                    f == 'name' ? filtered_results = [...fetchedResults].sort((a, b) => {
                        const titleA = a.title.toLowerCase()
                        const titleB = b.title.toLowerCase()
                        return titleA < titleB ? -1 : titleB < titleA ? 1 : 0
                    }) :
                        filtered_results = fetchedResults
            return filtered_results
        }
        const reOrderResults = () => {
            let ordered = orderResults(field)
            if (order < 0) ordered.reverse()
            setOrderedResuls(ordered)
        }
        if (fetchedResults) reOrderResults()
    }, [field, order, fetchedResults])

    if (orderedResults) return (
        <>
            <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <h2>{fetchedResults.length} resultados para: {searchTerms}</h2>
                <Form style={{ display: 'flex', flexDirection: 'row' }}>
                    <Form.Group>
                        <Form.Label>Filtrar por</Form.Label>
                        <Form.Select onChange={(e) => { setField(e.target.value) }}>
                            <option value='rating'>Calificación</option>
                            <option value='date'>Fecha de publicación</option>
                            <option value='name'>Alfabetico</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Orden</Form.Label>
                        <Form.Select onChange={(e) => { setOrder(e.target.value) }}>
                            <option value={1}>Descendente</option>
                            <option value={-1}>Ascendente</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </section>
            <section>
                <CarouselCard movies={orderedResults} />
            </section>
        </>
    )
    return <LoadingIcon />
}

export default SearchResults