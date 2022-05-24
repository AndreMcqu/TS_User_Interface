import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DATA from './assets/users.json'
import Userinfo from './components/Userinfo';
import User from './components/Interface'

export default function App() {
  return (
    DATA.map((user) => 
    <Userinfo user={user}/>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// DATA.map((item, key) => 
//     <Userinfo 
//     Username={item.Username}
//     Phone={item.Phone}
//     Mail={item.Mail}
//     Age={item.Age}