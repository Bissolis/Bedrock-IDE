import WelcomePlaceholder from "./components/WelcomePlaceholder";
import Wither from './assets/allPixelArts/FirstWitherDefeated-a95d8f43e039c754eeda.png'
import Title from './assets/images/title.png'

export default function Welcome(){
    return(
        <main className="w-full h-full grid grid-cols-32 grid-rows-32 bg-zinc-800">
            <WelcomePlaceholder />
            <div className="bg-zinc-900 col-span-30 row-span-24 grid grid-cols-32 grid-rows-32">
                <img src={Wither} alt="Wither" className="w-full h-full col-start-2 row-start-2 col-span-28 row-span-28 ml-2"/>
                <img src={Title} alt="Title" className="w-full h-full col-start-2 row-start-2 col-span-28 row-span-28 ml-5"/>
            </div>
            <div className="bg-zinc-800 col-span-30 row-span-10 grid grid-cols-32 grid-rows-32">
                <h1 className="col-span-32 text-white font-Minefactory text-2xl mt-2 ml-2">Welcome to bedrockIDE - Version 0.1.0</h1>
            </div>
        </main>
    );
}