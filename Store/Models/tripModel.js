import { types } from 'mobx-state-tree';

const Trip = types.model('Trip', {
  id: types.identifier,
  tripname: types.string,
  teamNumber: types.maybeNull(types.number),
  startingDate: types.maybeNull(types.Date),
  fixedDate: types.maybeNull(types.Date),
  gameOverMsg: types.maybeNull(types.string),
  returnLocation: types.maybeNull(types.string), 
  emergencyContact: types.maybeNull(types.string),
  instruction: types.maybeNull(types.string), 
  qrCode: types.model({
    data: types.maybeNull(types.string),
    createdAt: types.optional(types.Date, () => new Date())
  }),
  participants: types.optional(types.array(types.string), []),
});

export default Trip;
