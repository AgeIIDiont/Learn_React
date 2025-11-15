import {useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";

export default function ResultModel({targetTime, ref, remainingTime, onReset}) {
  const dialogInside = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  const score = Math.round((1-remainingTime/(targetTime*1000))*100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogInside.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogInside} className="result-modal" >
      {userLost? <h2>You Lost</h2>:<h2>Your Reault: {score}</h2> }
      <p>
        Thời gian đích: <strong>{targetTime} second</strong>
      </p>
      <p>
        Bạn còn <strong>{formattedRemainingTime} second</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
