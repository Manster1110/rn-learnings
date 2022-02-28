import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title='Forest' 
                imageToShow={require('../../assets/forest.jpg')}
                imageScore={8}
            />
            <ImageDetail 
                title='Beach' 
                imageToShow={require('../../assets/beach.jpg')} 
                imageScore={9}
            />
            <ImageDetail 
                title='Mountain' 
                imageToShow={require('../../assets/mountain.jpg')} 
                imageScore={5}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;