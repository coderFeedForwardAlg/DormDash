import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";





import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/* <NavigationContainer></NavigationContainer> */}
/*
REQUIERMENTS 

drivers should be able to upload schodeual 
* shoould be stored in firebase 
* use MUI for frunt end calendar and date-time pickers 



carless should be able to day they need somthing picked up and moved 
* should be stored in firebase untill compleat 
* shoud lbe able to spesify location 


algorithom finds match

carless pays when converming match 
* strip 

drvier is payed after delivery is made 
* stripe 

refund is givenn if nothing is acutualy droped off 
* strype 


*/

import HomeScreen from './componatnts/HomeScreen';
import ProfileScreen from './componatnts/ProfileScreen';
const Stack = createNativeStackNavigator();
import MyStack from './componatnts/Stack';

export default function App() {
  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOdDFLQfnhhPyZPiR3zWLBFIccuBxuI2Q",
  authDomain: "dormdash-e669d.firebaseapp.com",
  projectId: "dormdash-e669d",
  storageBucket: "dormdash-e669d.appspot.com",
  messagingSenderId: "2002534154",
  appId: "1:2002534154:web:b609fe33b464b43c1584f3",
  measurementId: "G-JW5E5KS607"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <GluestackUIProvider config={config}>
      <MyStack></MyStack>
        

    </GluestackUIProvider>
  );
}

