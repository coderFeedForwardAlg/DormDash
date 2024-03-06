
import { Box, Button, ButtonText, GluestackUIProvider, HStack, Input, InputField, Text } from '@gluestack-ui/themed';
import FeatureCard from "./FeatureCard";

import { Motion } from "@legendapp/motion"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Gradient from '../assets/Icons/Gradient';
import ResponsiveTimePickers from './ResponsiveTimePickers';
import { useState } from 'react';


import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { addDoc, collection } from "@firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const ProfileScreen = ({navigation}: {navigation: any}) => {

    

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
        const firestore = getFirestore(app);
    
    const [value, onChangeText] = useState('Enter Email address Here');

    const emailSubmit = () => {
        
        
        const ref = collection(firestore, "emails") // Firebase creates this automatically
     
        let data = {
            email: value
        }
        
        try {
            addDoc(ref, data)
        } catch(err) {
            console.log(err)
        }
      
        
      }

    return(
        
        <Box flex={1} backgroundColor="#450d7a"> 
        <ScrollView
          style={{ height: '100%' }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Box
            position="absolute"
            $base-h={500}
            $base-w={500}
            $lg-h={700}
            $lg-w={700}
          >
            <Gradient />
          </Box>
          {/* <HomeScreen></HomeScreen> */}
          
        <Box
        height="20%"
        $base-my="$16"
        $base-mx="$5"

        $lg-my="$24"
        $lg-mx="$32"
        justifyContent="space-between"
        alignItems="center"
      >
        
        
          <Motion.View
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                whileHover={{ scale: 1.2 }}
                whileTap={{ y: 20 }}
                transition={{ duration: 1 }}
          >
            <Box justifyContent="center" alignItems="center">
             <Text color="$white" fontWeight="$medium" ml="$2" size="3xl">
                  We will let you know when when there is a job available.
              </Text>
              </Box>
          </Motion.View>

          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            >
                
            <InputField color="$white"  
             onChangeText={text => onChangeText(text)}
             value={value}
             
            />
          </Input>
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
                <ButtonText
                onPress={()=>{
                    emailSubmit();
                    navigation.navigate('thanksDrive');
                }}
                >Confirm</ButtonText>
            </Button>
          {/* <Box $base-flexDirection="column"  display="flex" gap="$11" $md-flexDirection="row">
          
            <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
                <ButtonText>Monday</ButtonText>
            </Button>

            <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
                <ButtonText>Tuesday</ButtonText>
            </Button>

            <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
            <ButtonText>Wednesday</ButtonText>
            </Button>

            <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
            <ButtonText>Thursday</ButtonText>
            </Button>

            <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
            <ButtonText>Friday</ButtonText>
            </Button>

            <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
            <ButtonText>Saterday</ButtonText>
            </Button>

            <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
            <ButtonText>Sunday</ButtonText>
            </Button>
          </Box>

         

          
          
        <ResponsiveTimePickers></ResponsiveTimePickers> */}
       
      </Box>
          
          
        </ScrollView>
      </Box>
    );
  };

  export default ProfileScreen;