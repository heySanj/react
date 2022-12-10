import "./Card.css"

// This is a wrapper component --> any props can be passed through with props.children
function Card(props) {

    // Pass through the className to the wrapping HTML
    // MIND THE SPACE AFTER 'card'
    const classes = 'card ' + props.className

    return ( 
        <div className={classes}>
            {props.children}
        </div>
     );
}

export default Card;