import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageToShow, title, imageScore}) => {
    // console.log(props);
    return (
        <View>
            <Image source={imageToShow} />
            <Text>{title}</Text>
            <Text>Image score - {imageScore}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail;