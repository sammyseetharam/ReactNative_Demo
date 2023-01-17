import { SafeAreaView, StatusBar, StyleSheet, Dimensions,Text, View } from 'react-native';
import colors from './app/configc/colors'

export default function App() {
  console.log(StatusBar.currentHeight); 
  console.log(Dimensions.get("screen")); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text>Top</Text>
      </View>

      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>

      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff345',
    alignItems: 'center',
    justifyContent: 'center',


  },

  top: {
    backgroundColor: '#66EEFF',
    width: 300,
    height: 100,  
    marginTop: 30, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10, 
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35, 
    borderColor: 'black', 
    borderWidth: 2,
    borderBottomWidth: 10,   
  },

  bottom: {
    backgroundColor: '#DDEEFF',
    flex: 3,
    width: 100, 
    alignItems: 'center', 
  }, 
});
