import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([user, profile]) => {
      console.log(`${profile.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
