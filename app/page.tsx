import React from 'react';
import {categories} from "../constants";
import {fetchNews} from "../lib/fetchNews";

const HomeScreen = async ({}) => {

    const news: NewsResponse = await fetchNews(categories.join(','));

    return (
        <div>

        </div>
    );
};

export default HomeScreen;
// by Rokas with ❤️
