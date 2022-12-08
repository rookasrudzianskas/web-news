import React from 'react';
import {categories} from "../constants";
import {fetchNews} from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

const HomeScreen = async ({}) => {
    //response |
    const news: NewsResponse = (await fetchNews(categories.join(',')));

    return (
        <div>
            <NewsList news={news}/>
        </div>
    );
};

export default HomeScreen;
// by Rokas with ❤️
