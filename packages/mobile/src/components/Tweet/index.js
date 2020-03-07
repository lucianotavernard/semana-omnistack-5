import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import api from '../../services/api';

import {
  Container,
  Author,
  Content,
  LikeButton,
  LikeButtonText,
} from './styles';

export default function Tweet({ tweet }) {
  async function handleLike() {
    try {
      const { _id } = tweet;

      await api.post(`likes/${_id}`);
    } catch (error) {
      Alert.alert('Oops! Ocorreu algum erro ao efetuar o like :(');
    }
  }

  return (
    <Container>
      <Author>{tweet.author}</Author>
      <Content>{tweet.content}</Content>

      <LikeButton onPress={handleLike}>
        <MaterialCommunityIcons name="heart-outline" size={20} color="#999" />
        <LikeButtonText>{tweet.likes}</LikeButtonText>
      </LikeButton>
    </Container>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
};
