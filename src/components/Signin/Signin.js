import React, { useState, useContext } from 'react'
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import AxiosBackend from '../../lib/axios/AxiosBackend';
import bg from '../../images/bg.jpg'

import {
    Card,
    Container,
    Row,
    Form,
    Button,
} from 'react-bootstrap'

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            let payload = await AxiosBackend.post(
                'users/login/', {
                    email,
                    password,
                },
            );

            window.localStorage.setItem("jwtToken", payload.data.jwtToken);

            let decodedToken = jwtDecode(payload.data.jwtToken);

            dispatch({
                type: "LOGIN",
                email: decodedToken.email,
                username: decodedToken.username
            });

            navigate("/protected-home");

        } catch (e) {

            // toast.error(e.response.data.message, {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });

            navigate("/sign-up");
        }
    }

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{
                height: "100vh"
            }}
        >
            <img src={bg} style={{
                objectFit: "cover",
                height: "100vh",
                width: "100%",
                zIndex: "-1",
                position: "absolute"
            }} />
            <Row style={{ width: "100%" }}>
                 <Card
                    style={{
                        width: "80%",
                        padding: "2%",
                    }}
                    className="mx-auto mt-auto align-items-center transpCard"
                    bg={"custom"}
                >
                    <Card.Body className="w-100">
                        <Form onSubmit={handleSubmit}>
                            <h2
                                className="d-flex justify-content-center"
                                style={{
                                    fontFamily: "Spartan",
                                    fontWeight: "bold",
                                    color: "darkslategray"
                                }}>Please Sign In</h2>

                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                < br />
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}       
                                />
                            </Form.Group>                    
                        
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <br />
                                <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            
                            <br />
                        <Button type="submit">
                            Sign In
                        </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Signin
