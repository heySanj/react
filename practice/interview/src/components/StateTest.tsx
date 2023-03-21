import { useState } from 'react';

const StateTest = () => {

    const [numClicked, setNumClicked] = useState(0);

    return <>
        <h1>You have clicked the button {numClicked} times</h1>
        <button onClick={()=>setNumClicked(numClicked + 1)}>Click me!</button>
    </>;
}

export default StateTest;