import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  background: #7159c1aa;
  border-radius: 75px;
`;

export const GitDetailsContainer = styled.View`
  align-self: stretch;
  justify-content:  center;
  flex-direction: row;
  align-items: center;
`;

export const GitDetailsText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #555;
  margin: 0px 10px 0px 5px;
`;

export const RepoName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 10px 0px;
  text-align: center;
`;

export const RepoDescription = styled.Text.attrs({
  numberOfLines: 4,
})`
  text-align: center;
  font-size: 18px;
  margin: 10px 0px;
  color: #555;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin: 20px 0px;
`;

export const Builder = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 5px;
  background: #7859c1;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #fff;
`;
