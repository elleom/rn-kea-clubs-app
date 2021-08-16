import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

const DiscoveryScreen = props => {
    return (
        <View style={styles.text}>
            <Text>
                This is the Discovery screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        alignItems: 'center'
    }
    }
)

export default DiscoveryScreen;