// eslint-disable-next-line
import React, { useEffect, useState, memo } from 'react';
// eslint-disable-next-line
import { getStoryIds, getStory } from '../services/api'
import { Story } from '../components/Story'
import { GlobalStyle, StoriesContainerWrapper } from '../styles/ContainerStyles'
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";


export const StoriesContainer = () => {
    // value and setter - React hooks; init storyIds with empty array
    // eslint-disable-next-line
    const [storyIds, setStoryIds] = useState([]);
    const { count } = useInfiniteScroll();
    
    useEffect(() => {
        // async functions return promises -  
        // value put it in the square brackets is watched
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return(
        <>
        <GlobalStyle />
        <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
            <Story key={storyId} storyId= { storyId }/>
        ))}
        </StoriesContainerWrapper>
        </>
    )
}