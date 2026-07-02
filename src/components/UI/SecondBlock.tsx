export default function SecondBlock(){
    return(
        <div className="row-start-2 col-start-9 col-span-14 row-span-24 border-2 border-blue-700 mt-2 rounded-md grid grid-cols-32 grid-rows-32" style={{ backgroundImage: `radial-gradient(rgba(0,85,255,.2) 1px, transparent 1px), radial-gradient(rgba(0,85,255,.2) 1px, transparent 1px)`, backgroundSize: "28px 28px, 56px 56px", backgroundPosition: "0 0, 14px 14px"}}>
            <div className="flex items-center justify-center bg-blue-700 col-span-32 row-span-2 font-Minecraft text-white text-lg font-bold rounded-t-md">
                <h1 className="tracking-wider">2. Organização dos blocos</h1>
            </div>
        </div>
    );
}