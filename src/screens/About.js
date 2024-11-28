import { Button, View } from 'react-native';

function About({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go Home"
        />
      </View>
    );
  }
  
  export default About;