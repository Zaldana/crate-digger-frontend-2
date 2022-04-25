import React, { useContext } from 'react'
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../context/AuthContext"
import AxiosBackend from '../../lib/axios/AxiosBackend';
import bg from '../../images/bg.jpg'

import {
    Card,
    Container,
    Row,
    Button,
} from 'react-bootstrap'

function Demo() {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            let payload = await AxiosBackend.post(
                'users/login/', {
                    email: "demo@demo.com",
                    password: "Password123!",
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

            toast.error(e.response.data.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
    }

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{
                height: "100vh"
            }}
        >
            <img
                src={bg} style={{
                    objectFit: "cover",
                    height: "100vh",
                    width: "100%",
                    zIndex: "-1",
                    position: "absolute"
                }}
                alt=""
            />
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
                        <h2
                            className="d-flex justify-content-center"
                            style={{
                                fontFamily: "Spartan",
                                fontWeight: "bold",
                                color: "white"
                            }}>
                            Please Sign In
                        </h2>
                        <div style={{ height: "9vh" }}></div>

                        <Button
                            className="btn btn-warning btn-lg"
                            onClick={handleSubmit}>
                            Demo Sign In
                        </Button>
                        <div style={{ height: "10vh" }}></div>

                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Demo
