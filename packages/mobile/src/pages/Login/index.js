import React, { useState, useMemo } from 'react';
import { AsyncStorage, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Container, Content, Input, Button, ButtonText } from './styles';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const disabledSubmit = useMemo(() => !username.length, [username]);

  async function handleSubmit() {
    try {
      await AsyncStorage.setItem('@OmniStack:username', username);

      navigation.navigate('App');
    } catch (error) {
      Alert.alert('Oops! Ocorreu algum erro ao logar :(');
    }
  }

  function handleInputChange(text) {
    setUsername(text);
  }
  return (
    <Container behavior="padding">
      <Content>
        <View>
          <MaterialCommunityIcons name="twitter" size={64} color="#4BB0EE" />
        </View>

        <Input
          placeholder="Nome de usuário"
          value={username}
          onChangeText={handleInputChange}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
        />

        <Button onPress={handleSubmit} disabled={disabledSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
