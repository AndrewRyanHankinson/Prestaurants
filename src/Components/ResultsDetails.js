import react from 'react';
import {View, Text, Button, TextInput, Image, StyleSheet} from 'react-native';

const ResultsDetails = ({result}) => {
    return (
        <View style={styles.container}>
            
            <Image style={styles.imageStyle} source={{uri: result.image_url}} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.ratingStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginLeft: 5,
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 15,
        marginTop: 5,
    },
    ratingStyle: {
        fontSize: 14,
        marginLeft: 15,
        
    },


});

export default ResultsDetails;