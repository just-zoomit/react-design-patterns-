import {useState, useEffect} from 'react';

export const useDataSource = getResourceFunc => {
    const [resource, setResource] = useState(null);
    
    useEffect(() => {
       ( async () => {
        const result = await getResourceFunc();
        console.log(result);
        setResource(result.data);
        })();
    }, [getResourceFunc]);
    
    return resource;
    };