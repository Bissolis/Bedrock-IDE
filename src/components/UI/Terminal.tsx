export default function Terminal(){
    return(
        <div className="row-start-25 col-start-1 col-span-32 row-span-8 border-2 border-purple-700 mt-8 mr-1.5 rounded-md grid grid-cols-32 grid-rows-32 overflow-y-scroll">
            <div className="row-start-1 col-start-1 flex items-center bg-purple-700 col-span-32 row-span-6 font-Minecraft text-white text-lg font-bold rounded-t-md z-10">
                <h1 className="tracking-wide ml-3">Terminal</h1>
            </div>
            <p id="console" className="row-start-6 row-span-full col-span-full font-Minecraft text-white m-5"></p>
        </div>
    );
}

setInterval(() => {
    const console = document.getElementById("console");
    if (console) {
        console.innerHTML += "texto ";
    }
}, 10);