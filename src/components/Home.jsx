import React from "react";

function Home() {
    return (
        <div>
            <header>
                <h1>My Startup App</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h2>Welcome to My Startup</h2>
                <p>This is a placeholder for the main application content.</p>
                <p>
                    Visit our{" "}
                    <a href="https://github.com/kylermberg/startup-html" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>.
                </p>
            </main>
            <footer>
                <p>&copy; 2024 Kyler Berg</p>
            </footer>
        </div>
    );
}

export default Home;
