import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  const obj = { photo: null, user: null };
  
  try {
    obj.photo = await uploadPhoto('photo.jpg');
    obj.user = await createUser('Guillaume', 'Salva');
  } catch (error) {
    console.error('Error:', error);
  }
  
  return obj;
}