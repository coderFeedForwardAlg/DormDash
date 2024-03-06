

import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  
    return (
      <Box
        flexDirection="column"
        borderWidth={1}
        borderColor="$borderDark700"
        $web-flex={1}
        m="$2"
        p="$4"
        rounded="$md"
      >
        <Box alignItems="center" display="flex" flexDirection="row">
          {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
          <Text>
            <IconSvg />
          </Text>
          <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
            {name}
          </Text>
        </Box>
        <Text color="$textDark400" mt="$2">
          {desc}
        </Text>
      </Box>
    );
  };
  
  export default FeatureCard;