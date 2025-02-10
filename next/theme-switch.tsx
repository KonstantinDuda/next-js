'use client'

import { useTheme } from "next-themes";
import React from "react";

export default function ThemeSwitch() {
    const {theme, setTheme} = useTheme();

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Перемикач теми</button>
    );
}