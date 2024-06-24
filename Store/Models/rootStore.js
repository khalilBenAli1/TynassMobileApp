import { types, applySnapshot, flow } from 'mobx-state-tree';
import * as SecureStore from 'expo-secure-store';
import User from './userModel';
import Trip from './tripModel';


const transformUserData = (data) => {
  return {
    id: data._id,
    googleId: data.googleId,
    username: data.username,
    avatar: data.avatar,
    email: data.email,
    role: data.role,
    LegalPaper: data.LegalPaper,
    trips: data.trips,
    currentTrip: data.currentTrip,
    adminTrips: data.adminTrips,
    splashText: data.splashText,
    splashColor: data.splashColor,
    splashImage: data.splashImage,
    accessToken: data.accessToken,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt
  };
};

const RootStore = types.model('RootStore', {
  users: types.array(User),
  trips: types.array(Trip),
  currentUser: types.maybeNull(User),
  currentTrip: types.maybeNull(Trip),
  language: types.maybeNull(types.string),
})
.actions(self => ({
  setLanguage(lang) {
    self.language = lang;
  },
  setCurrentUser(userData) {
    const transformedUser = transformUserData(userData);
    self.currentUser = transformedUser;
  },
  setCurrentTrip(tripData) {
  
    self.currentTrip = tripData;
  },
  
  clearCurrentUser() {
    self.currentUser = null;
  },
  saveUserToStorage: flow(function* () {
    try {
      if (self.currentUser) {
        yield SecureStore.setItemAsync('currentUser', JSON.stringify(self.currentUser));
      }
    } catch (error) {
      console.error("Failed to save user to storage:", error);
    }
  }),
  loadUserFromStorage: flow(function* () {
    try {
      const user = yield SecureStore.getItemAsync('currentUser');
      if (user) {
        self.setCurrentUser(JSON.parse(user));
      }
    } catch (error) {
      console.error("Failed to load user from storage:", error);
    }
  }),
  clearUserFromStorage: flow(function* () {
    try {
      yield SecureStore.deleteItemAsync('currentUser');
      self.clearCurrentUser();
    } catch (error) {
      console.error("Failed to clear user from storage:", error);
    }
  })
}));

export default RootStore;
