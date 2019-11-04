import React from 'react';
import { Container, Col, Row, Table, Badge, Button, } from 'react-bootstrap';
import BookingModal from './modal'
import { Link } from "react-router-dom";
import logo from '../logo.png';

export default function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="https://www.trigent.com" target="_blank">
                        <img src={logo} width="150" height="30" alt="TRIGENT" />
                    </a>
                    <Link to="/" className="navbar-brand">Meeting Room Booking</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Log out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br />
            </div>
            <Container>
                <Row>
                    <Col md={4}>
                        <h2>
                            Upcoming Bookings <Badge variant="secondary">New</Badge>
                        </h2>
                    </Col>
                    <Col md={{ span: 2, offset: 2 }}><Button variant="primary" onClick={() => setModalShow(true)}>Create Booking</Button></Col>
                </Row>

            </Container>

            <BookingModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Room Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Subject</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Room 1</td>
                        <td>12.30</td>
                        <td>01.30</td>
                        <td>Meeting with HR </td>
                        <td>
                            <Button variant="outline-light" style={{ marginRight: 8 }}>Edit</Button>
                            <Button variant="outline-danger">Delete</Button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}