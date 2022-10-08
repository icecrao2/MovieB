import {
  database,
  ref,
  set,
  update,
  push,
  onValue,
  get,
  child,
} from '../getFirebase.js';


export const writeDibedData = (email, key) => {

  const data = {
    [key]: key
  }
  update(ref(database, `users/${email}/key`), data);
}

export const getDibedData = async (email) => {

  const dbRef = ref(database);
  
  
  return await get(child(dbRef, `users/${email}/key`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.keys(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

}