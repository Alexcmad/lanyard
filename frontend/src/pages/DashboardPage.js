import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Import Axios setup

function DashboardPage() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await api.get('/songs');
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, []);

    return (
        <div>
            <h2>Song List</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song._id}>
                        {song.title} - {song.arranger}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DashboardPage;
