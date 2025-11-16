import { useState } from "react";
import ResizeEventDemo from "./ResizeEventDemo";

export default function Parent(){
    const [show, setShow] = useState(true);

        return (
            <>
                <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
                {show && <ResizeEventDemo />}
            </>
        )
}