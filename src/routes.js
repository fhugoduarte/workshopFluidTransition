import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RepoList from './pages/RepoList';
import RepoDetails from './pages/RepoDetails';

export default createAppContainer(
  createStackNavigator({
    RepoList,
    RepoDetails,
  }, {
    defaultNavigationOptions: {
      header: null
    }
  })
);
