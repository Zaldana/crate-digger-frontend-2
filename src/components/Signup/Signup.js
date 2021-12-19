import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckTokenHook from "../hooks/CheckTokenHook"
import EmailHook from "../hooks/EmailHook"
import FirstNameHook from "../hooks/FirstNameHook"
import LastNameHook from "../hooks/LastNameHook"
import PasswordHook from "../hooks/PasswordHook"
import UsernameHook from "../hooks/UsernameHook"
import AxiosBackend from "../../lib/axios/AxiosBackend"
import { toast } from 'react-toastify';
import signUpBg from '../../images/signupbg.jpg'

import {
    Card,
    Container,
    Row,
    Form,
    Button
} from 'react-bootstrap'

function Signup() {

    const [
        firstName,
        handleFirstNameOnChange,
        firstNameError,
        setFirstNameOnFocus,
        setFirstNameOnBlur,
    ] = FirstNameHook();

    const [
        lastName,
        handleLastNameOnChange,
        lastNameError,
        setLastNameOnFocus,
        setLastNameOnBlur,
    ] = LastNameHook();

    const [
        username,
        handleUsernameOnChange,
        usernameError,
        setUsernameOnFocus,
        setUsernameOnBlur,
    ] = UsernameHook();

    const [
        password,
        handlePasswordOnChange,
        passwordError,
        setPasswordOnFocus,
        setPasswordOnBlur,
    ] = PasswordHook();

    const [
        email,
        handleEmailOnChange,
        emailError,
        setEmailOnFocus,
        setEmailOnBlur,
    ] = EmailHook();

    const navigate = useNavigate();

    const { checkJwtToken } = CheckTokenHook();

    useEffect(() => {
        if (checkJwtToken()) {
            navigate("/");
        }
    }, []);

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await AxiosBackend.post(
                'users/create-user/',
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    password,
                }
            );

            toast.success(`Welcome ${firstName}, Please Sign-in`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate("/sign-in");

        } catch (e) {

            let errorMessage = Object.values((e.response.data.error))

            toast.error(errorMessage.toString(), {
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
            style={{ height: "100vh", }}
        >
            <img
                src={signUpBg} style={{
                    objectFit: "cover",
                    height: "100vh",
                    width: "100%",
                    zIndex: "-1",
                    position: "absolute"
                }}
                alt=""
            />
            <Row style={{
                marginTop: "9%",
                width: "100%"
            }}>
                <Card
                    style={{
                        width: "80%",
                    }}
                    className="mx-auto mt-auto align-items-center transpCard"
                    bg={"custom"}
                >
                    <Card.Body >
                        <Form size="lg" onSubmit={handleSubmit} >
                            <h2
                                className="d-flex justify-content-center"
                                style={{
                                    fontFamily: "Spartan",
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >Please Sign Up</h2>

                            <Form.Group>
                                <Form.Label >First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    onFocus={() => setFirstNameOnFocus(true)}
                                    onBlur={() => setFirstNameOnBlur(true)}
                                    onChange={handleFirstNameOnChange}
                                />
                                <Form.Text muted>{firstNameError && firstNameError}</Form.Text>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="lastName"
                                        placeholder="Last Name"
                                        onFocus={() => setLastNameOnFocus(true)}
                                        onBlur={() => setLastNameOnBlur(true)}
                                        onChange={handleLastNameOnChange}
                                    />
                                    <Form.Text muted>{lastNameError && lastNameError}</Form.Text>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="username"
                                        placeholder="Username"
                                        onFocus={() => setUsernameOnFocus(true)}
                                        onBlur={() => setUsernameOnBlur(true)}
                                        onChange={handleUsernameOnChange}
                                    />
                                    <Form.Text muted>{usernameError && usernameError}</Form.Text>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        placeholder="name@example.com"
                                        onChange={handleEmailOnChange}
                                        onFocus={() => setEmailOnFocus(true)}
                                        onBlur={() => setEmailOnBlur(true)}
                                    />
                                    <Form.Text muted>{emailError && emailError}</Form.Text>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={handlePasswordOnChange}
                                        onFocus={() => setPasswordOnFocus(true)}
                                        onBlur={() => setPasswordOnBlur(true)}
                                    />
                                    <Form.Text>{passwordError && passwordError}</Form.Text>
                                </Form.Group>
                            <br />
                            <Container fluid="true" className="d-flex justify-content-end">
                                <Button type="submit">Sign Up</Button>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Signup
