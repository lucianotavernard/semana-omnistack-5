import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon } from './styles';

export default function HeaderButtonRight() {
  const navigation = useNavigation();

  function handleToNew() {
    navigation.navigate('New');
  }

  return (
    <Container onPress={handleToNew}>
      <Icon name="add-circle-outline" size={24} color="#4BB0EE" />
    </Container>
  );
}
