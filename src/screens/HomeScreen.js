import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("About"); }}>
                <Text style={styles.textButton}>Ir para tela About</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Profile"); }}>
                <Text style={styles.textButton}>Ir para tela Profile</Text>
            </TouchableOpacity>

            <Button title='ir para tela about' onPress={() => {
                navigation.navigate("About");
            }}
            />

            <StatusBar style="auto" />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },

    button: {
        backgroundColor: 'green',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4
    },

    textButton: {
        color: 'white',
        fontSize: 18
    }
});