import WelcomePlaceholder from "./components/WelcomePlaceholder";
import Turtles from './assets/allPixelArts/permissions_child_account-8fad2009b4d02bc059bf.png'
import Title from './assets/images/title.png'

export default function Welcome(){
    return(
        <main className="w-full h-full grid grid-cols-32 grid-rows-32 bg-zinc-800">
            <WelcomePlaceholder />
            <div className="bg-zinc-900 col-span-30 row-span-24 grid grid-cols-32 grid-rows-32">
                <img src={Turtles} alt="TurtlesImage" className="col-start-1 row-start-9 col-span-32 row-span-10 opacity-30"/>
                <img src={Title} alt="Title" className="w-full h-full col-start-2 row-start-1 col-span-28 row-span-28 ml-5 z-10"/>
            </div>
            <div className="bg-zinc-800 col-span-30 row-span-10 grid grid-cols-32 grid-rows-32">
                <h1 className="row-start-1 col-start-1 col-span-32 text-white font-Minefactory text-2xl mt-5 ml-5">Welcome to bedrockIDE - <span className="text-yellow-300">Version 0.1.0</span></h1>
                <p className="row-start-12 col-span-32 ml-5 text-white font-Minecraft">Notas: A versão 0.1.0 não é uma versão para ser lançada oficialmente, apenas para ser guardada no github e ser melhorada !!!</p>
                <button className="col-start-28 row-start-2 row-span-8 col-span-5 bg-green-600 mr-4 rounded-md text-white font-Minecraft text-[22px] shadow-[4px_6px_0] shadow-green-800">Iniciar</button>
            </div>
        </main>
    );
}