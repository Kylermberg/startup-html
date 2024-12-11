import React from "react";

function Login() {
    return (
        <div>
            <header>
                <h1>Login to My Startup</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                    
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    
                    <button type="submit">Login</button>
                </form>
            </main>
            <footer>
                <p>&copy; 2024 Kyler Berg</p>
            </footer>
        </div>
    );
}

export default Login;
