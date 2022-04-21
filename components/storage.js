import AsyncStorage from '@react-native-async-storage/async-storage';

const store = async (value) => {
    return new Promise( async (resolve, reject) => {
        try{
            const jsonValue = JSON.stringify(value)
            AsyncStorage.setItem('@data', jsonValue)
            resolve(jsonValue);
        }catch(e){
            reject(e)
        }
    });
}


const retrieve = () => {
    return new Promise(async function(resolve, reject) {
        try{
            const jsonValue = await AsyncStorage.getItem('@data')
            resolve(jsonValue != null ? JSON.parse(jsonValue) : null);
        }catch(e){
            reject(e)
        }
    });
}


export default {store, retrieve};