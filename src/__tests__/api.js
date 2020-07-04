import axios from "axios";
import { getStory, getStoryIds, newStoriesUrl, storyUrl } from "../services/api";
import { singleStory, emptySingleStory, storyIds } from "../fixtures";

jest.mock('axios');

describe('API', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    describe('Get story functionality', () => {
        it('requests a story from HackerNews API', async () => {
            axios.get.mockImplementation(() => 
                Promise.resolve({ data: { ...singleStory } }))

            const entity = await getStory(1)

            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1 }.json`);
            expect(entity).toEqual(singleStory)
        })
    })
})