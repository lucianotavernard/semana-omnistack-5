import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import websocket from '../../services/websocket';

import Tweet from '../../components/Tweet';

import { Container, TweetsList, Button, Icon } from './styles';

export default function Timeline() {
  const [tweets, setTweets] = useState([]);

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

  return (
    <Container>
      <TweetsList
        data={tweets}
        keyExtractor={item => String(item._id)}
        renderItem={({ item: tweet }) => <Tweet tweet={tweet} />}
      />
    </Container>
  );
}
