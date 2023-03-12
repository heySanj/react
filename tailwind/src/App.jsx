import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import SideBar from "./components/sideBar";

function App() {
    const [count, setCount] = useState(0);

    return <div className="flex">
        <SideBar></SideBar>
    </div>;
}

export default App;
