import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    useEffect(() => {
        if (!loading) return;

        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES)
        } else {
            setCount(count + STORY_INCREMENT);
        }

        setLoading(false);

    }, [loading, count]);

    useEffect(() => {
        
        const handleScroll = debounce(() => {
            if ( window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
                loading) {
                    return false;
                }
            setLoading(true);
        }, 200);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return { count }

}