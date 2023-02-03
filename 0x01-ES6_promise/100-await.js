import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const result1 = await uploadPhoto();
    const result2 = await createUser();
    return ({
      photo: result1,
      user: result2,
    });
  } catch (err) {
    return ({
      photo: null,
      user: null,
    });
  }
}
