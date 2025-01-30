import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Contact us </h1>
      <form className="mt-5 flex justify-center items-center">
        <input
          type="text"
          className="border border-black p-1 m-1"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-1 m-1"
          placeholder="message"
        />
        <button className="text-white font-bold font-sans bg-sky-950 border rounded-md m-1 px-2 py-1">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Contact;
