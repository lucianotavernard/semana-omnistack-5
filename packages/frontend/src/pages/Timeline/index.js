import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import websocket from '../../services/websocket';

import Tweet from '../../components/Tweet';

import logo from '../../assets/twitter.svg';
import './styles.css';

export default function Timeline() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  useEffect(() => {
    async function loadTweets() {
      const response = await api.get('tweets');

      setTweets(response.data);
    }

    loadTweets();
  }, []);

  useEffect(() => {
    websocket.on('tweet', data => setTweets([data, ...tweets]));

    websocket.on('like', data =>
      setTweets(tweets.map(tweet => (tweet._id === data._id ? data : tweet)))
    );
  }, [tweets]);

  async function handleSubmit(e) {
    if (e.keyCode !== 13) return;

    e.preventDefault();

    const content = newTweet;
    const author = localStorage.getItem('@Omnistack:username');

    await api.post('tweets', { content, author });

    setNewTweet('');
  }

  function handleTweetChange(e) {
    setNewTweet(e.target.value);
  }

  return (
    <div className="timeline-wrapper">
      <img height="24" src={logo} alt="Omnistack" />

      <form>
        <textarea
          value={newTweet}
          onChange={handleTweetChange}
          onKeyDown={handleSubmit}
          placeholder="O que está acontecendo?"
        />
      </form>

      <ul className="tweet-list">
        {tweets.map(tweet => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </ul>
    </div>
  );
}
