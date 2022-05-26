import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ScrollView, Image} from 'react-native';
import ResultsList from '../Components/ResultsList';
import Yelp from '../Api/Yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    


    const getResults = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
     };
     useEffect(() => {
            getResults(id);
        }, []);

    if(!result){
        return null;
    }


    return (
        <>
            <Text style = {styles.titleStyle}>{result.name}</Text>
            <Text style= {styles.titleStyle}>{result.location.address1}</Text>
            <Text style= {styles.titleStyle}>{result.phone}</Text>
            
            
            <FlatList
                vertical
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.imageStyle} source={{uri: item}} />;
                }}
            />

            
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 4,
        marginLeft: 5,
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
});



export default ResultsShowScreen;