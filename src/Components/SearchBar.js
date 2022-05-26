import React from 'react';
import {TextInput, View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" size={21} style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
            onEndEditing={onTermSubmit}
             placeholder="What kind of food do you want?"
             value={term}
             onChangeText={onTermChange} 
             autoCorrect={false}
             />     
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#D3D3D3',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
        
        
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        
        marginLeft: 10,
    },
    iconStyle: {
        fontSize: 22,
        paddingTop: 10,
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginRight: 10,
    }

    
});

export default SearchBar;