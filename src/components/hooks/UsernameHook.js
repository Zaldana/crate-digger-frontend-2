import { useState, useEffect } from "react";
import { isAlphanumeric } from "validator"

function UsernameHook() {

    const [username, setUsername] = useState("")
    const [onFocus, setOnFocus] = useState(false);
    const [onBlur, setOnBlur] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (onFocus) {

            if (username.length > 0) {

                if (!isAlphanumeric(username)) {
                    setError("Username cannot have special characters");

                } if (isAlphanumeric(username)) {
                    setError("");
                }
            }

        } if (onBlur) {

            if (username.length === 0) {
                setError("Username cannot be empty")
            }
        }
    }, [username, onFocus, onBlur])

    function handleUsernameOnChange(e) {

        setUsername(e.target.value)

    }

    return [
        username,
        handleUsernameOnChange,
        error,
        setOnFocus,
        setOnBlur
    ]

}

export default UsernameHook