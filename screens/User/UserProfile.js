import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import ImageSelector from "../../components/UI/ImageSelector";

const UserProfile = props => {
    const [selectedImage, setSelectedImage] = useState();

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath)
    }

    return <View>
        <ImageSelector navData={props.navigation} onImageTaken={imageTakenHandler} />
    </View>

}

const styles = StyleSheet.create({

})

export default UserProfile;
