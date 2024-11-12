import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const {loggedInUser} = useContext(UserContext)
    return (
        <div>
            <h2>Contact Us @ 12345467</h2>
            <h3>{loggedInUser}</h3>
        </div>
    )
}

export default Contact; 