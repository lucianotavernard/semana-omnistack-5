import React from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import like from '../../assets/like.svg';
import './styles.css';

export default function Tweet({ tweet }) {
  async function handleLike() {
    const { _id } = tweet;

    await api.post(`likes/${_id}`);
  }

  return (
    <li className="tweet">
      <strong>{tweet.author}</strong>

      <p>{tweet.content}</p>

      <button type="button" onClick={handleLike}>
        <img src={like} alt="Like" />
        {tweet.likes}
      </button>
    </li>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    _id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
};
