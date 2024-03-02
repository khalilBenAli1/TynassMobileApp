import { types } from 'mobx-state-tree';

const User = types.model('User', {
  id: types.identifier,
  username: types.string,
  avatar: types.optional(types.string, 'https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png'),
  email: types.string,
  password: types.string,
  phoneNumber: types.number,
  role: types.optional(types.enumeration('Role', ['user', 'admin', 'moderator']), 'user'),
  legalPapers: types.optional(types.array(types.string), []),
  trips: types.optional(types.array(types.string), []),
  currentTrip: types.maybeNull(types.string),
  adminTrips: types.optional(types.array(types.string), []),
});

export default User;
