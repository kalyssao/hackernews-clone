import * as React from "react";
import { act } from "react-dom/test-utils";
import { App } from "../App";
import { render, cleanup, waitForElement } from "@testing-library/react";
import { storyIds, singleStory } from "../fixtures";
import { getStory, getStoryIds  } from "../services/api";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/api', () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}));

test('renders the application', async() => {
    useInfiniteScroll.mockImplementation(() => ({
        count: STORY_INCREMENT,
    }));
    getStory.mockImplementation(() => Promise.resolve(singleStory));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

    const { getByText, queryByTestId } = render(<App />);
    await waitForElement(() => [
        expect(getByText("Hacker News Stories")).toBeTruthy(),
        expect(getByText("I Will Change The World")).toBeTruthy(),
        expect(queryByTestId('story-by').textContent).toEqual("By: Kalyssa O."),
    ]);
});