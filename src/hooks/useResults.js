import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMesssage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San Jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e){
            setErrorMesssage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};