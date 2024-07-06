import { types } from 'mobx-state-tree';

const Instruction = types.model('Instruction', {
  title: types.optional(types.string, ''),
  rules: types.optional(types.array(types.string), [])
});
const Mission = types.model('Mission', {
  missionName: types.optional(types.string, ''),
  description: types.optional(types.string, ''),
  codeSolution: types.maybeNull(types.string),
  time: types.maybeNull(types.Date),
  scorePoint: types.optional(types.number, 0),
  experienceURL: types.maybeNull(types.string),
  difficulty: types.optional(types.string, ''),
  long: types.optional(types.string, ''),
  lat: types.optional(types.string, ''),
  hint: types.optional(types.string, ''),
  hintCost: types.maybeNull(types.number),
  coverImage: types.optional(types.string, ''),
  missionImage: types.maybeNull(types.string),
  mediaType: types.maybeNull(types.string),
  arabeAudio: types.maybeNull(types.string),
  englishAudio: types.maybeNull(types.string),
  frenchAudio: types.maybeNull(types.string),
  quizType: types.optional(types.string, ''),
  accomplished: types.optional(types.boolean, false),
  answers: types.optional(types.array(types.model({
    answer: types.string,
    isCorrect: types.boolean,
  })), []),
  numberOfTrials: types.maybeNull(types.number),
  costPoint: types.maybeNull(types.number),
});

const QRCodeModel = types.model('QRCode', {
  data: types.maybeNull(types.string),
  createdAt: types.maybeNull(types.Date)
});

const Team = types.model('Team', {
  teamName: types.optional(types.string, ''),
  participants: types.optional(types.array(types.string), [])
});


const Trip = types.model('Trip', {
  id: types.optional(types.identifier, ''),
  tripType: types.optional(types.string, ''),
  tripname: types.optional(types.string, ''),
  startingDate: types.maybeNull(types.Date),
  fixedTime: types.maybeNull(types.string),
  gameOverMsg: types.maybeNull(types.string),
  returnLocation: types.maybeNull(types.string),
  emergencyContact: types.maybeNull(types.string),
  instruction: types.optional(types.array(Instruction), []),
  qrCode: types.optional(QRCodeModel, {}),
  participants: types.optional(types.array(types.string), []),
  missions: types.optional(types.array(Mission), []),
  memoryMail: types.optional(types.array(types.string), []),
  teams: types.optional(types.array(Team), []),
  createdAt: types.maybeNull(types.Date),
  updatedAt: types.maybeNull(types.Date),
  accessCode: types.optional(types.string, ''),
});

export default Trip;
