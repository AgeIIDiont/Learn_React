import { useEffect,useState } from "react"

export default function TimeDemo() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const setTimeOutId = setInterval(()=>{
            console.log("setTimeout duoc goi");
            setCount((prev)=>prev+1);
        },1000);
        //clean InterVal
        return () => {
            clearTimeout(setTimeOutId);
            console.log("Da clean Timeout");
        }
    },[]);
    // useEffect(() => {
    //     const setIntervalId = setInterval(()=>{
    //         console.log("setInterVal duoc goi");
    //         setCount((prev)=>prev+1);
    //     },1000);
    //     //clean InterVal
    //     return () => {
    //         clearInterval(setIntervalId);
    //         console.log("Da clean InterVal");
    //     }
    // },[]);


    return (
        <>
            <h3>Mount/Unmount demo</h3>
            <p>Count: {count}</p>
        </>
    )
};
