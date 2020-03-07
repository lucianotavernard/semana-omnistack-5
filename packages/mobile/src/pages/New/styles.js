import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding: 20px 0;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 32px;
  margin: 10px 0 0;
  padding: 0 20px;
  border-radius: 16px;
  background-color: #4bb0ee;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  margin: 20px;
  color: #333;
  font-size: 16px;
`;
