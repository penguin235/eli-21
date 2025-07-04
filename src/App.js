import React, { useState, useEffect } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [mood, setMood] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !mood) return;

    const newEntry = { title, mood, id: Date.now() };
    const updated = [newEntry, ...entries];

    setEntries(updated);
    setTitle('');
    setMood('');

    // TODO: Add backend persistence here (e.g., Supabase)
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎨 Community Mood Board</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Mood"
          value={mood}
          onChange={e => setMood(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <strong>{entry.title}</strong>: {entry.mood}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
