import classes from "./UserProfile.module.css"

type Props = {
    name: string;
    location: string;
    img: string;
}

const UserProfile = (props: Props) => {
    return <div className={classes.user}>
        <div className="avatar">
            <img src={props.img} alt={props.name}></img>
        </div>
        <div>
            <h1>{props.name}</h1>
            <h3>{props.location}</h3>
        </div>
    </div>
}

export default UserProfile;