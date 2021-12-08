import React from 'react'

function Signup() {
    return (
        <div>
            <main>
                <form >
                    <h1>Please Sign Up</h1>

                    <div>
                        <label>First Name</label>
                        <br />
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                        />
                        <div></div>
                    </div>

                    <div>
                        <label>Last Name</label>
                        <br />
                        <input
                            type="text"
                            id="lastName"
                            placeholder="last name"
                        />
                        <div></div>
                    </div>

                    <div>
                        <label>Username</label>
                        <br />
                        <input
                            type="text"
                            id="username"
                            placeholder="username"
                        />
                        <div></div>
                    </div>

                    <div>
                        <label>Email address</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
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

                        />
                        <div></div>
                    </div>
                    <br />
                    <button type="submit">
                        Sign Up
                    </button>
                </form>
            </main>
        </div>
    )
}

export default Signup
