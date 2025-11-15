import {useState, useRef} from "react";

export default function Player() {
  const playerName = useRef();
  const [namePlayer, setNamePlayer] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // function handleChange(e){
  //   setNamePlayer(e.target.value);
  //   setSubmitted(false);
  // }
  function handleClick(){
    //setSubmitted(true);
    setNamePlayer(playerName.current.value);
  }
  return(
    <section id="player">
      <h2>Welcome Player {namePlayer ?? "Noname"}</h2>
      <div>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set name</button>
      </div>
    </section>
  );
}
