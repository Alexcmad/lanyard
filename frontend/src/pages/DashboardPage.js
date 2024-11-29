// src/pages/DashboardPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function DashboardPage() {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const fetchSongs = async () => {
        try {
            const response = await api.get('/songs');
            setSongs(response.data);
        } catch (err) {
            setError('Failed to fetch songs. Please try again later.');
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div>
            <header>
                <h2>Dashboard</h2>
                <button onClick={handleLogout}>Logout</button>
            </header>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <main>
                <h3>Songs</h3>
                <ul>
                    {songs.length > 0 ? (
                        songs.map((song) => (
                            <li key={song._id}>
                                <h4>{song.title}</h4>
                                <p>Arrangers: {song.arranger.join(', ')}</p>
                                <p>Created at: {new Date(song.createdAt).toLocaleDateString()}</p>

                                {/* Display Scores */}
                                <div>
                                    <h5>Scores:</h5>
                                    {song.scores && song.scores.length > 0 ? (
                                        <ul>
                                            {song.scores.map((score) => (
                                                <li key={score._id}>
                                                    <a
                                                        href={`${process.env.REACT_APP_API_URL}/files/download/${score.fileId}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {score.filename}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No scores available.</p>
                                    )}
                                </div>

                                {/* Display Audio Files */}
                                <div>
                                    <h5>Audio Files:</h5>
                                    {song.audio_files && song.audio_files.length > 0 ? (
                                        <ul>
                                            {song.audio_files.map((audio) => (
                                                <li key={audio._id}>
                                                    <a
                                                        href={`${process.env.REACT_APP_API_URL}/files/download/${audio.fileId}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {audio.filename}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No audio files available.</p>
                                    )}
                                </div>

                                {/* Display Ratings */}
                                {/* ... existing ratings code ... */}

                                {/* Display Progress */}
                                {/* ... existing progress code ... */}
                            </li>
                        ))
                    ) : (
                        <p>No songs found.</p>
                    )}
                </ul>
            </main>
        </div>
    );
}

export default DashboardPage;
