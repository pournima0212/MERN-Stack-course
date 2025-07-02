import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import axios from "axios";

const Student = () => {
    const [studentData, setStudentData] = useState();

    const [firstName, setFirstName] = useState()
    const [lastname, setLastname] = useState()
    const [std , setStd] = useState()
    const [rollNo , setRollNo] = useState()
    const [address, setAddress] = useState()
    
    

    // API Integration => GET All studnt List
    const getAllStudentData = async () => {
        try {
            const response = await axios.get("http://localhost:2000/students");
            setStudentData(response.data);
             console.log(response.data, "response");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllStudentData();
    }, []);

    const submitStudentData = async () => {

        try {     
            const payload = {
                firstName: firstName,
                lastName: lastname,
                std: std,
                rollNo: rollNo,
                address: address,
            };
            const response = await axios.post("http://localhost:2000/students", payload);

             console.log(response.data, "====>")

        } catch (error) {
            console.log(error);
        }
    };

    const onChangeFirstName = (e) => {
        try {
            setFirstName(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeLastname = (e) => {
        try {
            setLastname(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeStd = (e) => {
        try {
            setStd(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

        const onChangerollNo = (e) => {
        try {
            setRollNo(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }
    
    const onchangeaddress = (e) =>{
        try {
            setAddress(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

   


    return (
        <div>
            <h1 className="text-center my-5">Manage Student Records</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="add-form-div">
                            <h2 className="text-center">Add Student</h2>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" onChange={onChangeFirstName} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" onChange={onChangeLastname} />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Std</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Std" onChange={onChangeStd} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Roll No</Form.Label>
                                        <Form.Control type="text" placeholder="Roll No" onChange={onChangerollNo} />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St"  onChange={onchangeaddress}/>
                                </Form.Group>

                                <Button variant="primary" onClick={submitStudentData}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="add-form-div">
                            <h2 className="text-center">Student List</h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Std</th>
                                        <th>Roll No</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Pournima</td>
                                        <td>Mane</td>
                                        <td>10th</td>
                                        <td>01</td>
                                        <td>pune</td>
                                    </tr>

                                    {studentData &&
                                        studentData.map((each,index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{each.firstName}</td>
                                                <td>{each.lastName}</td>
                                                <td>{each.std}</td>
                                                <td>{each.rollNo}</td>
                                                <td>{each.address}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;