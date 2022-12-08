"use client"

import React, {useEffect, useState} from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

const DarkModeButton = ({}) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            {currentTheme === 'dark' ? (
                <SunIcon className="h-8 w-8 cursor-pointer text-yellow-500" onClick={() => setTheme('light')}/>
            ) : (
                <MoonIcon className="h-8 w-8 cursor-pointer text-gray-900" onClick={() => setTheme('dark')}/>
            )}
        </div>
    );
};

export default DarkModeButton;
// by Rokas with ❤️
