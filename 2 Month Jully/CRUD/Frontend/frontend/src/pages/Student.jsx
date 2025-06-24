import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const Student = () => {
    return (
        <div>
            <h1 className="text-center my-5">CRUD = Create, Read, Update, Delete</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="add-form-div">
                            <h2 className="text-center">Add Student</h2>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Std</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Standard" />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Roll No.</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Roll No." />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main Street" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="add-form-div">
                            <h2 className="text-center">Students List</h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Std</th>
                                        <th>Roll No.</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Pournima</td>
                                        <td>Mane</td>
                                        <td>10th</td>
                                        <td>09</td>
                                        <td>Karad</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student