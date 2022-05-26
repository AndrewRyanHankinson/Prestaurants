import {useEffect, useState} from 'react';
import Yelp from '../Api/Yelp';

export default () => {
    const [errorHandlingMessage, setErrorHandlingMessage] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchApi = async (searchTerm, searchLocation) => {
        try{
            const response = await Yelp.get('/search', {
                params: { 
                    limit: 50,
                    term: searchTerm,
                    location: 'liverpool',
                    sortby: 'rating',
                    

                    
                    
                
                    
                    
                }
            });
            setSearchResults(response.data.businesses);
        } catch(err){
            setErrorHandlingMessage('Something went wrong');
        }
    };

       

    return [searchApi, searchResults, errorHandlingMessage];

};
