import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text1}>{this.props.main}</Text>
                <Text style={styles.text2}>{this.props.description}</Text>
                <Text style={styles.text3}>{this.props.temp} °C</Text>
                <Text style={styles.text4}>Patnarin 5935512027</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text1: { textAlign: 'center', fontSize: 25 },
    text2: { textAlign: 'center', fontSize: 20 },
    text3: { textAlign: 'center', fontSize: 25 },
    text4: { textAlign: 'center', fontSize: 10, opacity: 1 }

});