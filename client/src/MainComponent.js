import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./MainComponent.css";

const MainComponent = () => {
  const [now, setNow] = useState()

  async function onClick() {
    const res = await axios.get("/api/now");
    console.log(res)
    setNow(res.data)
  }

  return (
    <div>
      <button onClick={onClick}>Present</button>
      {now && <p>{now}</p>}
    </div>
  );
};

export default MainComponent;
