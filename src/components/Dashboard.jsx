import React from "react";

function Dashboard() {
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h2>Database Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Player 1</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Player 2</td>
                            <td>150</td>
                        </tr>
                    </tbody>
                </table>
                <h2>WebSocket Data</h2>
                <div id="websocket-data">
                    <p>Live messages or updates will appear here.</p>
                </div>
                <h2>3rd-Party Service Placeholder</h2>
                <p>Integration with external services will appear here.</p>
            </main>
            <footer>
                <p>&copy; 2024 Kyler Berg</p>
            </footer>
        </div>
    );
}

export default Dashboard;
