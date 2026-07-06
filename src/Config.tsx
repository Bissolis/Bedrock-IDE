import WelcomePlaceholder from "./components/WelcomePlaceholder";
import { invoke } from "@tauri-apps/api/core";
import { useState, useEffect } from "react";

export default function Config(){

    const [theme, setTheme] = useState("");

    useEffect(() => {
        loadTheme();
    }, []);

    async function loadTheme() {
        const value = await invoke<string>("get_theme");
        setTheme(value);
    }

    async function tradeTheme() {
        const newTheme = theme === "dark" ? "light" : "dark";

        await invoke("set_theme", {
            tradeTheme: newTheme,
        });

        setTheme(newTheme);

        window.location.reload();
    }

    const themebg1 = theme === "dark" ? "bg-zinc-800" : "bg-zinc-300";
    const textColor = theme === "dark" ? "text-white" : "text-zinc-800";
    const actived = theme === "dark" ? "bg-zinc-200" : "bg-green-600";
    const activedCube = theme === "dark" ? "justify-start" : "justify-end";
    const activedCubeColor = theme === "dark" ? "bg-zinc-400" : "bg-zinc-600";

    return(
        <main className={`w-full h-full grid grid-cols-32 grid-rows-32 ${themebg1}`}>
            <WelcomePlaceholder />
            <h1 className={`${textColor} text-3xl font-Minefactory row-start-2 col-start-4`}>Configurações</h1>
            <h1 className={`${textColor} col-start-4 row-start-6 font-Minefactory text-[18px]`}>tema: </h1>
            <div className={`${actived} col-start-6 col-span-2 row-start-6 h-5 mt-1.5 flex ${activedCube} rounded-md`}>
                <div className={`${activedCubeColor} w-8 h-8 -translate-y-1.5 rounded-md`} onClick={tradeTheme}></div>
            </div>
        </main>
    );
}