import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer ' + 'Sa1HPOb0xTsPq6bQQZU-kfMvwtwKIlAAsJITcGZofXcciJ2DvYsNOUncdlrRi1MLcp7a9Grc4m262dcBDinwrYdJojkHbwG32MUkXrXNYmyTKAloj3WHiylhMXuOYnYx'
    }
});

