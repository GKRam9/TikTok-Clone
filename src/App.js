import React, { useState, useEffect } from 'react';
import Video from './Video';
import './App.css';
import axios from './axios';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/tiktok/data/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ vidUrl, channel, description, song, likes, messages, shares }) => (
            <Video
              vidUrl={vidUrl}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;


