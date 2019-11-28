import { createAppContainer } from 'react-navigation';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';

import RepoList from './pages/RepoList';
import RepoDetails from './pages/RepoDetails';

export default createAppContainer(
  createFluidNavigator({
    RepoList,
    RepoDetails
  })
);
