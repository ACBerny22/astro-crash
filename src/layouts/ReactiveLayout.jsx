import React, { useEffect } from 'react';

import {isDarkThemeOn} from "../thememodal"
import { useStore } from '@nanostores/react';


export default function Layout ({children}){

    const $isDark = useStore(isDarkThemeOn);

    useEffect(() => {
        console.log(isDarkThemeOn.get());
    }, [$isDark]);


    return(
        <>
        <div className={$isDark ? 'dark text-white bg-zinc-700' : ''}>{children}</div>
        </>
    )
}

