import React from 'react'

function Signin() {
    return (
        <div>
            <main>
                <form onSubmit={console.log("submit")}>
                    <h1>Please Sign In</h1>

                    <div>
                        <label>Email Address</label>
                        < br />
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            name="email"
                            // onChange={(e) => setEmail(e.target.value)}
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
                            // onChange={(e) => setPassword(e.target.value)}
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
