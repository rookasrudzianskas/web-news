'use client'

import React, {useState} from 'react';

const SearchBox = ({}) => {
    const [input, setInput] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex justify-between items-center">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400" placeholder="Search Keywords..." type="text" />
            <button disabled={!input} className="text-orange-400 disabled:text-gray-400 " type="submit">Search</button>
        </form>
    );
};

export default SearchBox;
// by Rokas with ❤️
