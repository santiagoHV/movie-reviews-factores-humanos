import PropTypes from 'prop-types'
import { ListGroup, Button, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ListDisplayer.css'
import { useState } from 'react'

const ListDisplayer = ({ elements }) => {
    const [page, setPage] = useState(1)
    const pageSize = 10
    if (elements.length === 0) {
        return
    }
    const pages = []
    const groups = []
    let index = 0
    while (index < elements.length) {
        groups.push(elements.slice(index, index + pageSize))
        index += pageSize
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
    const renderEllipsis = (key) => <Pagination.Ellipsis key={key} disabled />
    const currentPagination = () => {
        let pagination = [];
        const addPage = (n) => {
            if (n > 1 & n < pages.length) {
                pagination.push(pages[n - 1])
            }
        }
        if (pages.length <= 5) {
            pagination = pages;
        } else {
            pagination.push(pages[0])
            if (page > 3) {
                pagination.push(renderEllipsis('ellipsisPrev'))
            }

            addPage(page - 1)
            addPage(page)
            addPage(page + 1)
            if (page < pages.length - 2) {
                pagination.push(renderEllipsis('ellipsisNext'))
            }
            pagination.push(pages[pages.length-1])
        }
        return pagination;
    };
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
                <Pagination.Prev onClick={()=>{
                    page>1?setPage(page-1):null
                }}/>
                {currentPagination()}
                <Pagination.Next onClick={()=>{
                    page<pages.length?setPage(page+1):null
                }}/>
            </Pagination>
        </div>

    )
}

ListDisplayer.propTypes = {
    elements: PropTypes.array.isRequired
}

export default ListDisplayer