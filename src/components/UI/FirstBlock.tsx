export default function FirstBlock(){
    return(
        <div className="row-start-2 col-start-1 col-span-8 row-span-24 border-2 border-orange-700 mt-2 rounded-md grid grid-cols-32 grid-rows-32" style={{ backgroundImage: `radial-gradient(rgba(240,60,0,.2) 1px, transparent 1px), radial-gradient(rgba(240,60,0,.2) 1px, transparent 1px)`, backgroundSize: "28px 28px, 56px 56px", backgroundPosition: "0 0, 14px 14px"}}>
            <div className="flex items-center justify-center bg-orange-700 col-span-32 row-span-2 font-Minecraft text-white text-lg font-bold rounded-t-md">
                <h1 className="tracking-wider">1. Blocos de eventos</h1>
            </div>
        </div>
    );
}