import {useEffect, useState} from "react";

export default function DemoWithDeps() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect chạy khi count đổi: ", count);
  }, [count]);
  return (
    <>
      <h3>Truyền dependency</h3>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count + 0)}>Giữ nguyên</button>
      <p>Giá trị : {count}</p>
      {console.log("Render lại giao diện")}
    </>
  );
}
