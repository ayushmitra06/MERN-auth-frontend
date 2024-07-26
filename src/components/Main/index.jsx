import styles from './styles.module.css';
import React from 'react';

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>AuthShield</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <div className={styles.content}>
                <section className={styles.intro}>
                    <h2>About the Project</h2>
                    <p>
                        Using React, Node.js, Express & MongoDB, we have implemented an authentication system. Users can sign up and log in to their accounts with their email addresses. The authentication is implemented using JSON Web Tokens (JWT). This project demonstrates a complete authentication process, including user registration and login.
                    </p>
                </section>
                <section className={styles.about}>
                <h2>Use of JSON Web Tokens (JWT)</h2>
                    <p>
                        JSON Web Tokens (JWT) are an open, industry-standard method for securely transmitting information between parties as a JSON object. This project utilizes JWT to handle authentication and secure access to protected routes. Here’s how it works:
                    </p>
                    <ul>
                        <li>Upon successful login, a JWT is generated and sent to the client.</li>
                        <li>The client stores the JWT and includes it in the header of subsequent requests to access protected resources.</li>
                        <li>The server verifies the token on each request and grants access to the requested resource if the token is valid.</li>
                    </ul>
                </section>
                <section className={styles.features}>
                    <h2>Project Features</h2>
                    <ul>
                        <li>User Registration with Email Verification</li>
                        <li>Secure Login with JWT Authentication</li>
                        <li>Protected Routes for Authorized Users</li>
                        <li>Responsive Design for Mobile and Desktop</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Main;
