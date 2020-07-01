// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api'

export const Story = ({ storyId }) => {
    // eslint-disable-next-line
    const [story, setStory] = useState({});
    // eslint-disable-next-line
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <>
        <a href={story.url}><p>{story.title}</p></a>
        By: <p>{story.by}</p>
        Posted: <p>{story.time}</p>
        </>
    ) : null
};