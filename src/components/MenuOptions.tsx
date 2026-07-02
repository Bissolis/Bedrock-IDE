import Icon from '../assets/images/bedrock icon.png'
import Close from "../assets/images/box-cross-svgrepo-com.svg?react";
import { getCurrentWindow } from '@tauri-apps/api/window';

export default function MenuOptions(){
  return(
    <div className="bg-zinc-950 col-start-1 col-span-32 row-start-1 row-span-1 grid grid-cols-32 grid-rows-32 p-4">
      <img src={Icon} alt="Bedrock Icon" className='w-1/2 2xl:w-1/3 2xl:ml-4 col-start-1 row-start-1 object-contain -translate-y-3'/>
      <p className='font-Minecraft text-zinc-500 col-span-8 col-start-2 row-start-1 -translate-y-3 ml-3 text-[16px] cursor-pointer hover:text-zinc-50'>File</p>
      <p className='font-Minecraft text-zinc-500 col-span-8 col-start-3 row-start-1 -translate-y-3 ml-3 text-[16px] cursor-pointer hover:text-zinc-50'>Edit</p>
      <p className='font-Minecraft text-zinc-500 col-span-8 col-start-4 row-start-1 -translate-y-3 ml-3 text-[16px] cursor-pointer hover:text-zinc-50'>View</p>
      <p className='font-Minecraft text-zinc-500 col-span-8 col-start-5 row-start-1 -translate-y-3 ml-4 text-[16px] cursor-pointer hover:text-zinc-50'>Shortcuts</p>

      <Close className='col-start-32 col-span-2 row-span-3 w-1/2 2xl:w-1/3 2xl:ml-8 2xl:-translate-y-0.5 row-start-15 cursor-pointer text-zinc-400 hover:scale-[1.08] hover:text-zinc-50 transition-all duration-200 justify-center self-center ml-4' onClick={() => ConfigWindow()}/>
    </div>
  );
}

async function ConfigWindow(){
  getCurrentWindow().close();
}