import React from 'react';
import Icon from '@expo/vector-icons/Octicons';

import {
  Container,
  Avatar,
  GitDetailsContainer,
  GitDetailsText,
  RepoName,
  RepoDescription,
  Footer,
  Builder,
  Button,
  ButtonTitle,
} from './styles';

export default function RepoDetails({ navigation }) {
  const repo = navigation.getParam('repo', null);

  return (
    <Container>
      <Avatar source={{ uri: repo.avatar }} />

      <RepoName>{repo.name}</RepoName>

      <GitDetailsContainer>
        <Icon name="star" size={18} color="#555" />
        <GitDetailsText>{repo.stars}</GitDetailsText>

        <Icon name="repo-forked" size={18} color="#555" />
        <GitDetailsText>{repo.forks}</GitDetailsText>

      </GitDetailsContainer>

      <RepoDescription>{repo.description}</RepoDescription>

      <Footer>
        {repo.builtBy.map(builder => (
          <Builder key={builder.href} source={{ uri: builder.avatar }} />
        ))}
      </Footer>

      <Button onPress={() => navigation.goBack()}>
        <ButtonTitle>Voltar</ButtonTitle>
      </Button>
    </Container>
  );
}
