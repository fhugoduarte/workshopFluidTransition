import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Transition } from 'react-navigation-fluid-transitions';

import {
  Container,
  Header,
  Title,
  CardList,
  Card,
  Avatar,
  TextContainer,
  RepoName,
  RepoDescription,
} from './styles';

export default function RepoList({ navigation }) {
  const [repos, setRepos] = useState([]);

  async function loadRepos() {
    const { data } = await axios.get(
      'https://github-trending-api.now.sh/repositories',
      {
        params: {
          since: 'monthly'
        }
      }
    );

    setRepos(data.slice(0, 10));
  }

  useEffect(() => {
    loadRepos();
  }, []);

  function rotateIn({ progress, start, end }) {
    const rotateAnimation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: ['-180deg', '-180deg', '0deg', '0deg']
    });

    const opacityAnimation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: [0, 0, 1, 1]
    });

    return { transform: [{ rotate: rotateAnimation }], opacity: opacityAnimation }
  }

  function rotateOut({ progress, start, end }) {
    const rotateAnimation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: ['0deg', '0deg', '-180deg', '-180deg']
    });

    const opacityAnimation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: [1, 1, 0, 0]
    });

    return { transform: [{ rotate: rotateAnimation }], opacity: opacityAnimation }
  }

  return (
    <Container>
      <Transition appear={rotateIn} disappear={rotateOut}>
        <Header>
          <Title>Top 10 repositórios do mês</Title>
        </Header>
      </Transition>

      <CardList
        data={repos}
        extraData={repos}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate('RepoDetails', { repo: item })}>
            <Transition shared={`avatar-${item.url}`}>
              <Avatar source={{ uri: item.avatar }} />
            </Transition>

            <TextContainer>
              <Transition shared={`name-${item.url}`}>
                <RepoName>{item.name}</RepoName>
              </Transition>

              <RepoDescription>{item.description}</RepoDescription>
            </TextContainer>
          </Card>
        )}
      />
    </Container>
  );
}


