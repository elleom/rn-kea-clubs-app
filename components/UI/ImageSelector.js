import React, {useState} from 'react';
import {View, Button, Image, Text, StyleSheet, Alert} from "react-native";
import Colors from "../../constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";

const ImageSelector = props => {
    const [pickedImage, setPickedImage] = useState();


    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
        if (result.status !== 'granted') {
            Alert.alert('Denied', "You need to agree to continue", [{text: 'Okay'}])
            return false;
        }
        return true;
    }

    const onPressHandler = async () => {
        const hasPermissions = await verifyPermissions()
        if (!hasPermissions) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
            ,
        });

        setPickedImage(image.uri);
    }

    return <View style={styles.imagePicker}>
        <View style={styles.imagePreview}>
            {!pickedImage ? (<Text>No image picked yet</Text>
            ) : (
                <Image style={styles.image} source={{uri: pickedImage}}></Image>
            )}
        </View>
        <Button title='Take Image' color={Colors.primary} onPress={onPressHandler}/>
    </View>
}


const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#ccc',
        borderWidth: 1

    },
    image: {
        width: '100%',
        height: '100%'
    },
    imagePicker: {
        alignItems: "center"
    }
})

export default ImageSelector;
