import { useEffect, useState } from "react";


export const LoaddingScreen = ({onComplete}) => {


    const [text, setText] = useState("");

const fullText = "Loading...!";





useEffect(() => {

let index = 0;
//create a interval to update the text every 100ms
const interval=setInterval(()=>{

    setText(fullText.substring(0, index));
    index++;

    //need to end this interval when the text is complete
    if(index > fullText.length){
        clearInterval(interval);
setTimeout(()=>{
    onComplete();
},1000)   }

},100);

//cleanup function to clear the interval
return () => clearInterval(interval);

},[onComplete]);
    return <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">

        <div className="mb-4 text-4xl font-mono font-bold animate-blink">{text}</div>

        <div className="w-[100px] h-[2px] bg-gray-800 rounded relative overflow-hidden">

            <div className="w-[40%] h-full bg-gradient-to-r from-blue-600 via-white to-purple-900  animate-loading-bar"></div>
        </div>

        
    </div>
}