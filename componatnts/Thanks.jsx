
import { Box, Button, ButtonText, FormControl, GluestackUIProvider, HStack, Heading, Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import FeatureCard from "./FeatureCard";

import { Motion } from "@legendapp/motion"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Gradient from '../assets/Icons/Gradient';

import { useState } from 'react';





const Thanks = () => {
    const [value, onChangeText] = useState('Enter Email address Here');

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
             <Text color="$white" fontWeight="$medium" ml="$2" size="6xl">
                  Thanks for using DormDash!
              </Text>
              </Box>
          </Motion.View>

       
      </Box>
          
          
        </ScrollView>
      </Box>
    );
  };

  export default Thanks;