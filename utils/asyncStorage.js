import { AsyncStorage } from "react-native";

const storeItem = async (key, item) => {
  try {
    //we want to wait for the Promise returned by AsyncStorage.setItem()
    //to be resolved to the actual value before returning the value
    var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
  return
}

const retrieveItem = async (key) => {
  try {
    const retrievedItem =  await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return
}

const clearItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(error)
  }
}

export { storeItem, retrieveItem, clearItem }