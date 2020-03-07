import React, { useState } from 'react';
import { AsyncStorage, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import api from '../../services/api';

import { Container, Header, Button, ButtonText, Input } from './styles';

export default function New() {
  const navigation = useNavigation();

  const [newTweet, setNewTweet] = useState('');

  async function handleSubmit() {
    try {
      const content = newTweet;
      const author = await AsyncStorage.getItem('@OmniStack:username');

      await api.post('tweets', { author, content });

      navigation.goBack();
    } catch (error) {
      Alert.alert('Oops! Ocorreu algum erro ao enviar o seu tweet :(');
    }
  }

  function handleInputChange(text) {
    setNewTweet(text);
  }

  function handleGoBackClick() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBackClick}>
          <MaterialIcons name="close" size={24} color="#4BB0EE" />
        </TouchableOpacity>

        <Button onPress={handleSubmit}>
          <ButtonText>Tweetar</ButtonText>
        </Button>
      </Header>

      <Input
        multiline
        placeholder="O que está acontecendo?"
        placeholderTextColor="#999"
        value={newTweet}
        onChangeText={handleInputChange}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
      />
    </Container>
  );
}
