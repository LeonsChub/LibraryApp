import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import './reset.css'

function Sidebar() {
    return (
        <Col xs={3} md={2} id="sidebar">
            <ul className="linkWrap">
                <li>
                    <Link className="link" to="books">
                        Books
                    </Link>
                </li>
                <li>
                    <Link className="link" to="workers">
                        Workers
                    </Link>
                </li>
                <li>
                    <Link className="link" to="customers">
                        Customers
                    </Link>
                </li>
            </ul>
        </Col>
    )
}

export default Sidebar
