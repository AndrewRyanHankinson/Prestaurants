import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import ResultsList from '../Components/ResultsList';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useResults';



const SearchScreen = () => {
    const [term, setTerm] = useState([]);
    const [location, setLocation] = useState([]);
    const [searchApi, searchResults, errorHandlingMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return searchResults.filter(result => {
            return result.price === price;
        });
    };
    

    return (
        <>
            
            <SearchBar 
                term={term}
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term, location)}
            />

             
            {errorHandlingMessage ? <Text>{errorHandlingMessage}</Text> : null}
            
            <ScrollView>
                <ResultsList searchResults={filterResultsByPrice('£')} 
                title="Cheap and cheerful?"  />

                <ResultsList searchResults={filterResultsByPrice('££')} 
                title ="Not too expensive." />

                <ResultsList searchResults={filterResultsByPrice('£££')} 
                title="Feeling fancy?" />

                <ResultsList searchResults={filterResultsByPrice('££££')} 
                title="Fine dining?" /> 
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;