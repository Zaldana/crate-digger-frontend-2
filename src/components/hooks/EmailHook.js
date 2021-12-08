import { useState, useEffect } from "react";
import { isEmail } from "validator"

function EmailHook() {

    const [email, setEmail] = useState("")
    const [onFocus, setOnFocus] = useState(false);
    const [onBlur, setOnBlur] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (onFocus) {

            if (email.length > 0) {

                if (isEmail(email)) {
                    setError("");
                }
            }

        } if (onBlur) {

            if (!isEmail(email)) {
                setError("Please enter a valid email");

            } if (email.length === 0) {
                setError("Email cannot be empty")
            }
        }

    }, [email, onFocus, onBlur])

    function handleEmailOnChange(e) {

        setEmail(e.target.value)

    }

    return [
        email,
        handleEmailOnChange,
        error,
        setOnFocus,
        setOnBlur
    ]

}

export default EmailHook