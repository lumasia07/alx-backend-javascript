import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
      .then((result) => {
        const [photoRes, userRes] = result;
        console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
      }).catch(() => {
        console.log('Signup system offline');
      });
}

export default handleProfileSignup;