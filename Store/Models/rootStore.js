import { types } from 'mobx-state-tree';
import User from './userModel';
import Trip from './tripModel';

const RootStore = types.model('RootStore', {
  users: types.array(User),
  trips: types.array(Trip),
  language: types.maybeNull(types.string),
})
.actions(self => ({
  setLanguage(lang) {
    self.language = lang;
  },
}));

export default RootStore ;
