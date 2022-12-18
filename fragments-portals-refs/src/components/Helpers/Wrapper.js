// This wrapper component simply passes on any child components / elements and doesn't render anything itself
// Useful for wrapping multiple elements together when returning a React component

// This wrapper component already comes pre-built in React --> Fragments

const Wrapper = (props) => {
    return props.children;
};

export default Wrapper;
