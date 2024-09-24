import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardPage() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/songs`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSongs(response.data);
        };

        fetchSongs();
    }, []);

    return (
        <div>
            <h2>Song List</h2>
            <ul>
                {songs.map(song => (
                    <li key={song._id}>
                        {song.title} - {song.arranger}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DashboardPage;
