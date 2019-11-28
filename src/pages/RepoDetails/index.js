import React from 'react';
import Icon from '@expo/vector-icons/Octicons';
import { Transition } from 'react-navigation-fluid-transitions';

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
      <Transition shared={`avatar-${repo.url}`}>
        <Avatar source={{ uri: repo.avatar }} />
      </Transition>

      <Transition shared={`name-${repo.url}`}>
        <RepoName>{repo.name}</RepoName>
      </Transition>


      <Transition appear="horizontal">
        <GitDetailsContainer>
          <Icon name="star" size={18} color="#555" />
          <GitDetailsText>{repo.stars}</GitDetailsText>

          <Icon name="repo-forked" size={18} color="#555" />
          <GitDetailsText>{repo.forks}</GitDetailsText>

        </GitDetailsContainer>
      </Transition>

      <Transition appear="horizontal" delay>
        <RepoDescription>{repo.description}</RepoDescription>
      </Transition>

      <Transition appear="scale">
        <Footer>
          {repo.builtBy.map(builder => (
            <Builder key={builder.href} source={{ uri: builder.avatar }} />
          ))}
        </Footer>
      </Transition>

      <Transition appear="bottom">
        <Button onPress={() => navigation.goBack()}>
          <ButtonTitle>Voltar</ButtonTitle>
        </Button>
      </Transition>
    </Container>
  );
}
