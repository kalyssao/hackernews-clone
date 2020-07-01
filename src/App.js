// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { getStoryIds } from '../src/services/api'
export const App = () => {
    // value and setter - React hooks; init storyIds with empty array
    // eslint-disable-next-line
    const [storyIds, setStoryIds] = useState([]);
    
    useEffect(() => {
        console.log(getStoryIds());
    }, []);

    return (
        <p>{storyIds}</p>
    )

}
