import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function App() {
  return (
    <View style={{backgroundColor:'white',flex:1, paddingLeft:60,paddingRight:60}}> 
     
     <Text style={{paddingTop:60,fontSize:18,
      fontWeight:'700'}}>SIGN UP</Text>
     <Text style={{paddingTop:25, fontWeight:'700'}}>Email </Text>
     <TextInput style={{borderWidth:0.9,width:300, height:50,borderRadius:10}}></TextInput>
     <Text style={{paddingTop:12, fontWeight:'700'}}>Password</Text>
     <TextInput  style={{borderWidth:0.9,width:300, height:50,borderRadius:10}}></TextInput>
     <TextInput></TextInput>
     <TouchableOpacity style={{borderWidth:1,borderRadius:10, elevation:10, borderColor:'transparent', height:50,width:300, justifyContent:'center',
     alignItems:'center', backgroundColor:'red'}}> 
        <Text style={{color: 'white', fontSize:18, fontWeight:'700'}}>SIGN UP</Text>
       </TouchableOpacity>
       <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:20 }}>
       <View style={{backgroundColor:'black', width:120, height:1,}}></View>
       <Text style={{borderWidth:1, borderRadius:10, width:50, height:40, textAlignVertical: 'center', textAlign: 'center', fontSize:20,}}>OR</Text>
       <View style={{backgroundColor:'black', width:120, height:1,}}></View>
       </View>
      
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:30}}>
      
      <View style={{ borderWidth:2, borderRadius:30, width:50, height: 50, justifyContent: 'center', alignItems: 'center', borderColor:'red' }}>
      <FontAwesome5 name='google' size={30} color={'red'}/>
       </View>

       <View style={{ borderWidth:2, borderRadius:30, width:50, height: 50, justifyContent: 'center', alignItems: 'center', borderColor:'blue' }}>
      <FontAwesome5 name='facebook' size={30} color={'blue'} />
       </View>
       
       <View style={{ borderWidth:2, borderRadius:30, width:50, height: 50, justifyContent: 'center', alignItems: 'center', borderColor:'blue' }}>
      <FontAwesome5 name='linkedin' size={30} color={'blue'}  />
       </View>
      
         </View>
      
       <TextInput style={{paddingTop:1,}}></TextInput>
          <Text style={{alignSelf:'center', fontSize:18, fontWeight:'500'}}>
            Already a user? <Text style={{textDecorationLine:'underline', marginEnd: 8}}>LOGIN</Text>
          </Text>
         
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
