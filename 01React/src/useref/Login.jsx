import React, { useRef } from 'react';

export default function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    console.log("rendered");

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log("Username:", username);
        console.log("Password:", password);
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" ref={usernameRef} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" ref={passwordRef} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}