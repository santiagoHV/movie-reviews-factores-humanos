import PropTypes from 'prop-types'
import { ListGroup, Button, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ListDisplayer.css'
import { useState } from 'react'

const ListDisplayer = ({ elements }) => {
    const [page, setPage] = useState(1)
    if (elements.length === 0) {
        return
    }
    const pages = []
    const groups = []
    let index = 0
    while (index < elements.length) {
        groups.push(elements.slice(index, index + 5))
        index += 5
    }
    for (let number = 1; number <= groups.length; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === page} onClick={() => {
                setPage(number)
            }}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className='list-container'>
            <ListGroup>
                {groups[page - 1].map((element, index) => {
                    return (
                        <ListGroup.Item key={index}>
                            <h6>{element.name}</h6>
                            <Button as={Link} to={element.url}>Ir</Button>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
            <Pagination>
                <Pagination.Prev />
                {pages}
                <Pagination.Next />
            </Pagination>
        </div>

    )
}

ListDisplayer.propTypes = {
    elements: PropTypes.array.isRequired
}

export default ListDisplayer