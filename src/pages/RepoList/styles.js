import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { FlatList, Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin: 0px 20px;
`;

export const Header = styled.View`
  padding-top: ${`${getStatusBarHeight() + 30}px`};
  padding-bottom: 15px;
  align-self: stretch;
  align-items: center;
`;

export const Title = styled.Text`
  color: #222;
  font-size: 22px;
  font-weight: bold;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-self: stretch;
  margin: 20px 0px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#555',
  placeholder: 'Busque por uma linguagem...',
})`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
  padding: ${Platform.OS === 'ios' ? '17px 10px' : '10px'};
  align-self: stretch;
  color: #555;
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;
  font-size: 16px;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 5px;
  background: #7859c1;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #fff;
`;

export const CardList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() + 10 },
})``;

export const Card = styled.TouchableOpacity`
  background: #eee;
  padding: 10px;
  border-width: 2px;
  border-color: #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  background: #7159c1aa;
  border-radius: 35px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  margin: 0px 10px;
  flex: 1;
`;

export const RepoName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const RepoDescription = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #555;
`;
