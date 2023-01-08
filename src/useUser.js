import {useState, useEffect} from 'react';
import axios from 'axios';

export const useUser = (userId) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
       ( async () => {
        const response = await axios.get(`/users/${userId}`);
        console.log(response);
        setUser(response.data);
        })();
    }, [userId]);
    
    return user;
    };