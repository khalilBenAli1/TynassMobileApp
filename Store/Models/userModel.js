import { types } from 'mobx-state-tree';

const User = types.model('User', {
  id: types.identifier,
  googleId: types.string,
  username: types.string,
  avatar: types.optional(types.string, 'https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png'),
  email: types.string,
  role: types.optional(types.enumeration('Role', ['user', 'admin', 'moderator']), 'user'),
  LegalPaper: types.optional(types.array(types.string), []),
  trips: types.optional(types.array(types.string), []),
  currentTrip: types.maybeNull(types.string),
  adminTrips: types.optional(types.array(types.string), []),
  splashText: types.optional(types.string, ''),
  splashColor: types.optional(types.string, '#FFFFFF'),
  splashImage: types.optional(types.string, ''),
  accessToken: types.maybe(types.string),
  createdAt: types.string,
  updatedAt: types.string
});

export default User;
