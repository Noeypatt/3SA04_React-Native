import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
        <View>
            <Text style={styles.text2}>{this.props.main}</Text>
            <Text style={styles.text3}>{this.props.description}</Text>
            <Text style={styles.text4}>{this.props.temp} °C</Text>
            <Text style={styles.text4}></Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    text2: {textAlign: 'center', fontSize: 25},
    text3: {textAlign: 'center', fontSize: 20},
    text4: {textAlign: 'center', fontSize: 25},   
});