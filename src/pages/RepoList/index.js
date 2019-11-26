import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <Container>
      <Header>
        <Title>Top 10 repositórios do mês</Title>
      </Header>

      <CardList
        data={repos}
        extraData={repos}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate('RepoDetails', { repo: item })}>
            <Avatar source={{ uri: item.avatar }} />

            <TextContainer>
              <RepoName>{item.name}</RepoName>

              <RepoDescription>{item.description}</RepoDescription>
            </TextContainer>
          </Card>
        )}
      />
    </Container>
  );
}


