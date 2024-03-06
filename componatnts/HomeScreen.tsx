
import { Box, Button, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import FeatureCard from "./FeatureCard";

import { Motion } from "@legendapp/motion"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



import LightBulbPerson from '../assets/Icons/LightbulbPerson';
import Rocket from '../assets/Icons/Rocket';
import Gradient from '../assets/Icons/Gradient';




const HomeScreen = ({navigation}: {navigation: any}) => {
    return (

        <Box flex={1} backgroundColor="$black">
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
        height="60%"
        $base-my="$16"
        $base-mx="$5"
        $base-h="80%"
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
                transition={{ duration: 1000 }}
          >
            <Box justifyContent="center" alignItems="center">
             <Text color="$white" fontWeight="$medium" ml="$2" size="6xl">
                  Welcom To DormDash
              </Text>
              </Box>
          </Motion.View>
          
          
        
        <Box $base-flexDirection="column" $md-flexDirection="row">
        <TouchableOpacity
             onPress={() => navigation.navigate('Profile')}
        >
        <FeatureCard
            iconSvg={LightBulbPerson}
            name="I'm A Deliverer"
            desc="Make money with flexible hours!"
          />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate('needmove')}>
                <FeatureCard
              iconSvg={Rocket}
              name="I Need Stuff Moved"
              desc="Get things delivered straight to your dorm with no hassle!" 
              
            />
            
          </TouchableOpacity>

          

        </Box>
        
      </Box>
          
          
        </ScrollView>
      </Box>
    );
  };


  export default HomeScreen;