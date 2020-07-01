// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { getStoryIds, getStory } from '../services/api'
import { Story } from '../components/Story'

export const StoriesContainer = () => {
    // value and setter - React hooks; init storyIds with empty array
    // eslint-disable-next-line
    const [storyIds, setStoryIds] = useState([]);
    
    useEffect(() => {
        // async functions return promises -  
        // value put it in the square brackets is watched
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => 
        <Story key={storyId} storyId= { storyId }/>
    )

}