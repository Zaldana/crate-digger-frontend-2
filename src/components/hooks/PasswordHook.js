import { useState, useEffect } from "react";
import { isStrongPassword } from "validator"

function PasswordHook() {

    const [password, setPassword] = useState("")
    const [onFocus, setOnFocus] = useState(false);
    const [onBlur, setOnBlur] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (onFocus) {

            if (password.length > 0) {

                if (isStrongPassword(password)) {
                    setError("");
                }
            }

        } if (onBlur) {

            if (!isStrongPassword(password)) {
                setError("Your password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and at least 8 characters long");
            }

            if (password.length === 0) {
                setError("Password cannot be empty")
            }
        }
    }, [password, onFocus, onBlur])

    function handlePasswordOnChange(e) {

        setPassword(e.target.value)

    }

    return [
        password,
        handlePasswordOnChange,
        error,
        setOnFocus,
        setOnBlur
    ]

}

export default PasswordHook