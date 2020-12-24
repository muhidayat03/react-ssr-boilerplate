import Home from './components/Home';
import UserList, { loadData } from './components/UserList';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/user',
    component: UserList,
  }
];