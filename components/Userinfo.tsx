import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from './Interface'

const Userinfo = ({user}: {user:User}) => {
    return (
        <View style={styles.container}>
            <Text>Username : {user.Username}</Text>
            <Text>Phone : {user.Phone}</Text>
            <Text>@ : {user.Mail}</Text>
            <Text>Age : {user.Age}</Text>
            <Text>active : {user.isLogged}</Text>
            <Text>Admin : {user.isAdmin}</Text>
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

export default Userinfo;