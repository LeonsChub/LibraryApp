import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Sidebar from './componenets/Sidebar'
import BookDisp from './pages/BookDisp'
import { useReducer } from 'react'

function reducer(type, action) {}

function App() {
    const [state, dispatch] = useReducer(reducer, {
        books: [],
        customer: [],
        workers: [],
    })
    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const res = await axios({
            method: 'get',
            url: 'http://localhost:3000/api/books',
        })

        setBooks(res.data.books)
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Container fluid className="mx-0">
                    <Row>
                        <Sidebar />

                        <Col
                            xs={9}
                            md={10}
                            style={{ backgroundColor: '#f97316' }}
                        >
                            <Routes>
                                <Route path="/books" element={<BookDisp />} />
                                <Route
                                    path="/workers"
                                    element={<h1> workers </h1>}
                                />
                                <Route
                                    path="/customers"
                                    element={<h1> customers </h1>}
                                />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default App
