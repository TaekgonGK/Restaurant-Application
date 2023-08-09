import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XKXjNQx5Ko560IadC8NzIp0yGXZXvvQB6Dhp6rPaW63bf6ZU5HZ2l5ENBF2HYUpBYRBXBfzHap7MP1SX8MMk-fkI-ChQmfttvnu44ogktFxeOWHn4prcXxH0opjTZHYx'
    }
});