import {
  database,
  ref,
  set,
  update,
  push
} from '../getFirebase.js';


export const writeDibedData = (email, key) => {

  const data = {
    [key]: key
  }


  //updates[`/user/${email}/${key}`] = data;
  const newPostKey = update(ref(database, `users/${email}/key`), data);

  //return update(ref(database), updates);

}