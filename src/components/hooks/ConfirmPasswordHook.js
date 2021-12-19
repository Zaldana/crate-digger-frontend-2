import { useState, useEffect } from "react";
import { isStrongPassword } from "validator"

function ConfirmPasswordHook() {

    const [confirmPassword, setConfirmPassword] = useState("")
    const [onFocus, setOnFocus] = useState(false);
    const [onBlur, setOnBlur] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (onFocus) {

            if (confirmPassword.length > 0) {

                if (isStrongPassword(confirmPassword)) {
                    setError("");
                }
            }

        } if (onBlur) {

            if (!isStrongPassword(confirmPassword)) {
                setError("Your password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and at least 8 characters long");
            }

            if (confirmPassword.length === 0) {
                setError("Password cannot be empty")
            }
        }
    }, [confirmPassword, onFocus, onBlur])

    function handleConfirmPasswordOnChange(e) {

        setConfirmPassword(e.target.value)

    }

    return [
        confirmPassword,
        handleConfirmPasswordOnChange,
        error,
        setOnFocus,
        setOnBlur
    ]

}

export default ConfirmPasswordHook