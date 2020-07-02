// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api'
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/StoryStyles'

export const Story = ({ storyId }) => {
    // eslint-disable-next-line
    const [story, setStory] = useState({});
    // eslint-disable-next-line
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta>
                <span className="story__by" data-testid="story-by">
                    <StoryMetaElement color="#000"> By:</StoryMetaElement> {story.by}
                </span>
                <span className="story__time" data-testid="story-time">
                    <StoryMetaElement color="#000"> Posted:</StoryMetaElement> {` `}{story.time}
                </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null
};