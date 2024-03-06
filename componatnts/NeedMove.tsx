
import { Box, Button, ButtonText, FormControl, GluestackUIProvider, HStack, Heading, Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import FeatureCard from "./FeatureCard";

import { Motion } from "@legendapp/motion"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Gradient from '../assets/Icons/Gradient';
import ResponsiveTimePickers from './ResponsiveTimePickers';
import { useState } from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { addDoc, collection } from "@firebase/firestore";



const NeedMoved = ({navigation}: {navigation: any}) => {
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


    const [email, setEmail] = useState('');
    const [from, setFrom] = useState('');

    const [to, setTo] = useState('');

    const ref = collection(firestore, "emails") // Firebase creates this automatically

    const send = () =>{
        let data = {
            email: email,
            from: from,
            to: to
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
                  Tell us what needs to be moved and where.
              </Text>
              </Box>
          </Motion.View>
          <Text color="$white" lineHeight="$xs">
            This will cost $15.
          </Text>
          <FormControl
      p="$4"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderLight300"
      $dark-borderWidth="$1"
      $dark-borderRadius="$lg"
      $dark-borderColor="$borderDark800"
    >
      <VStack space="xl">
        <Heading color="$white" lineHeight="$md">
          Login
        </Heading>
        <VStack space="xs">
          <Text color="$white" lineHeight="$xs" >
            Email
          </Text>
          <Input>
            <InputField type="text" color="$white" onChangeText={email => setEmail(email)}
             value={email}/>
          </Input>
          <Text color="$white" lineHeight="$xs">
            Where does the packege need to be moved to?
          </Text>
          <Input>
            <InputField type="text" color="$white" onChangeText={from => setFrom(from)}
            value={from}/>
          </Input>
          <Text color="$white" lineHeight="$xs">
            Where does the packege need to be moved to?
          </Text>
          <Input>
            <InputField type="text" color="$white" onChangeText={to => setTo(to)}
            value={to}/>
          </Input>
          <Button
          ml="auto"
          onPress={()=>{
            send();
            navigation.navigate('thanks');
          }}
        >
          <ButtonText color="$white">Save</ButtonText>
        </Button>
        </VStack>
        
        
      </VStack>
    </FormControl>
          
       
      </Box>
          
          
        </ScrollView>
      </Box>
    );
  };

  export default NeedMoved;