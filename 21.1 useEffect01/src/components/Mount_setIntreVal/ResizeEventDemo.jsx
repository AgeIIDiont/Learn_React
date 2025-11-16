import { useEffect } from "react"

export default function ResizeEventDemo() {
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth < 800){
                console.log("# Resize cửa sổ nhỏ hơn 800px")
            }
        }
        //Đăng kí event
        window.addEventListener("resize", handleResize);
        console.log("Đã add event Resize");
        //== Bỏ cleanup để demo kết quả
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Đã remove event Resize");
        }
    }, 
    [])

    return (
        <>
            <h3>Resize cửa sổ nhỏ hơn 800px để xem cốnle</h3>
        </>
    )
};
