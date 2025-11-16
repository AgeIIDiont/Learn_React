import { useState } from "react";
import TimeDemo from "./TimeDemo";

export default function Parent(){
    const [show, setShow] = useState(true);

        return (
            <>
                <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
                {show && <TimeDemo />}
            </>
        )
}