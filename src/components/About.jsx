import React from "react";

function About() {
    return (
        <div>
            <header>
                <h1>About Platonic</h1>
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
                <h2>About Our App</h2>
                <p>
                    Platonic is designed to help people find meaningful platonic friendships in their local area. 
                    It’s a safe space for making connections.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to foster connections and create a supportive community through friendship.
                </p>
                <h2>Contact</h2>
                <p>
                    For inquiries, reach out to us at{" "}
                    <a href="mailto:support@platonic.com">support@platonic.com</a>.
                </p>
            </main>
            <footer>
                <p>&copy; 2024 Kyler Berg</p>
            </footer>
        </div>
    );
}

export default About;
