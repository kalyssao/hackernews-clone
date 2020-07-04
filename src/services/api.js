import axios from 'axios';
import { selectFields } from '../selectors/selectFields'
export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

    return result;
} 

// async so that we don't block execution of
// other functions
export const getStoryIds = async () => {
    // the .then could have been (data => data) but we used deconstruction
    // to get the data within the response
    const result = await axios.get(newStoriesUrl).then(({ data }) => data);

    return result;
}