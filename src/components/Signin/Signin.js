import React, { useState, useContext } from 'react'
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import AxiosBackend from '../../lib/axios/AxiosBackend';
import { toast } from "react-toastify";

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

            toast.error(e.response.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate("/sign-up");
        }
    }

    return (
        <div>
            <main>
                <form onSubmit={handleSubmit}>
                    <h1>Please Sign In</h1>

                    <div>
                        <label>Email Address</label>
                        < br />
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div></div>

                    </div>

                    <div>
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <button type="submit">
                        Sign In
                    </button>
                </form>
            </main>
        </div>
    )
}

export default Signin
