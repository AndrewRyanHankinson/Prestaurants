import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from '../Components/SearchBar';

function SearchScreen() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <View>
            <SearchBar searchTerm={searchTerm}
             onTermChange={newTerm => setSearchTerm(newTerm)} 
             onTermSubmit={() => console.log('Term submitted')} />
             
            <Text>Search Screen</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;