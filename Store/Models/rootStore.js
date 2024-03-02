import { types } from 'mobx-state-tree';
import User from './userModel';
import Trip from './tripModel';

const RootStore = types.model('RootStore', {
  users: types.array(User),
  trips: types.array(Trip),
});

export default RootStore ;
