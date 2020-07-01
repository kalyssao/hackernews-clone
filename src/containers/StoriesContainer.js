// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { getStoryIds, getStory } from '../services/api'

export const StoriesContainer = () => {
    // value and setter - React hooks; init storyIds with empty array
    // eslint-disable-next-line
    const [storyIds, setStoryIds] = useState([]);
    
    useEffect(() => {
        // async functions return promises -  
        // value put it in the square brackets is watched
        getStoryIds().then(data => setStoryIds(data));
        getStory('23706770').then(data => console.log(data))
    }, []);

    return (
        <p>{JSON.stringify(storyIds)}</p>
    )

}