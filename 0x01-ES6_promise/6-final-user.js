import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((elements) => elements.map((element) => ({
      status: element.status,
      value: element.status === 'fulfilled' ? element.value : String(element.reason),
    })));
}
