import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Author = styled.Text`
  color: #1c2022;
  font-size: 16px;
  font-weight: bold;
`;

export const Content = styled.Text`
  margin: 10px 0;
  color: #1c2022;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  text-align: justify;
`;

export const LikeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LikeButtonText = styled.Text`
  margin-left: 5px;
  color: #999;
`;
