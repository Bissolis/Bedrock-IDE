import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Book from '../assets/images/0-Achievement-Book-4892ed211f615067ecbb.png'
import Bedrock from '../assets/images/bedrock-20795e0a280aa8bf0ed2.png'
import CommandBlock from '../assets/images/command-block-0c312a997f65ebda04a3.png'
import ShulkerBox from '../assets/images/behaviour-packs-icon-2f4af74c62b42f1fb412.png'
import RecipeBook from '../assets/images/recipe_book_icon.png'
import Settings from '../assets/images/settings_glyph_color_2x.png'

import gift1 from '../assets/images/promo_gift_small_blue.png'
import gift2 from '../assets/images/promo_gift_small_green.png'
import gift3 from '../assets/images/promo_gift_small_pink.png'
import gift4 from '../assets/images/promo_gift_small_yellow.png'
import { openUrl } from "@tauri-apps/plugin-opener";

import { invoke } from "@tauri-apps/api/core";

const Images = [gift1, gift2, gift3, gift4];

export default function WelcomePlaceholder(){

  const [Color, setColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => (prevColor + 1) % Images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [theme, setTheme] = useState("");

    function getTheme(){

        useEffect(() => {
            async function ThemeValue() {
                const Value = await invoke<string>("get_theme")
                setTheme(Value)
            }

            ThemeValue();
        }, [])

        return theme;
    }

    getTheme()

    const themebg = theme === "dark" ? "bg-zinc-950" : "bg-zinc-50";
  return(
      <div className={`row-start-1 col-start-1 row-span-32 col-span-2 ${themebg} grid grid-cols-32 grid-rows-32`}>
        <button className="row-start-1 col-start-5 col-span-20 row-span-2 flex items-center justify-center mt-1 cursor-pointer" onClick={OpenGithub}><img src={Bedrock} alt="Go to IDE" className="w-12"/></button>
        <Link to="/" className="row-start-8 col-start-5 col-span-20 row-span-2 flex items-center justify-center mt-10"><img src={Book} alt="Go to IDE" className="w-12"/></Link>
        <Link to="shulker" className="row-start-11 col-start-5 col-span-20 row-span-2 flex items-center justify-center"><img src={CommandBlock} alt="Go to IDE" className="w-12"/></Link>
        <Link to="shulker" className="row-start-13 col-start-5 col-span-20 row-span-2 flex items-center justify-center mt-10"><img src={ShulkerBox} alt="Go to IDE" className="w-12"/></Link>
        <Link to="shulker" className="row-start-16 col-start-5 col-span-20 row-span-2 flex items-center justify-center"><img src={RecipeBook} alt="Go to IDE" className="w-12"/></Link>
        <Link to="shulker" className="row-start-28 col-start-5 col-span-20 row-span-2 flex items-center justify-center"><img src={Images[Color]} alt="Go to IDE" className="w-12"/></Link>
        <Link to="config" className="row-start-30 col-start-5 col-span-20 row-span-2 flex items-center justify-center mt-7"><img src={Settings} alt="Go to IDE" className="w-12"/></Link>
      </div>
  );
}

async function OpenGithub() {
  await openUrl("https://github.com/Bissolis/Bedrock-IDE")
}