import React, {useState} from 'react';
import {View, Button, Image, Text, StyleSheet, Alert} from "react-native";
import Colors from "../../constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ImageSelector = props => {
    const [pickedImage, setPickedImage] = useState();


    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
        if (result.status !== 'granted') {
            Alert.alert('Denied', "You need to agree to continue", [{cardContainer: 'Okay'}])
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
            aspect: [4, 4],
            quality: 0.5,
            mediaTypes: "Images"
            ,
        });

        setPickedImage(image.uri);
        props.onImageTaken(image.uri)
    }

    return <View style={styles.imagePicker}>
        <View style={styles.imagePreview}>
            {!pickedImage ? (<Text>No image picked yet</Text>
            ) : (
                <Image style={styles.image} source={{uri: pickedImage}}></Image>
            )}
        </View>
        <Button title='Take Image' color={Colors.primary} onPress={onPressHandler}/>
        <Button title='Save' color={Colors.primary} onPress={() => {
            if (pickedImage) {
                console.log(pickedImage);
                AsyncStorage.setItem('userImage', {imageUri: pickedImage.toString()})
            }

            props.navData.navigate('Menu')
        }
        }/>
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
