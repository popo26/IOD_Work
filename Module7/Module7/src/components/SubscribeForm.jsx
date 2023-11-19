import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { useUserContext } from "../context/userContext";
import { MyThemeContext } from "../context/myThemeContext";
import { useContext } from "react";

export default function SubscribeForm() {
  // const [status, setStatus] = useState("");

  // similar state variables mapped to form inputs
  //   const [firstName, setFirstName] = useState("Mary");
  //   const [lastName, setLastName] = useState("Poppins");
  //   const [email, setEmail] = useState("mary@poppins.com");

  const [inputPropsFirstName, resetFirstName] = useFormInput("Mary");
  const [inputPropsLastName, resetLastName] = useFormInput("Poppins");
  const [inputPropsEmail, resetEmail] = useFormInput("mary@poppins.com");

  const { currentUser, handleUpdateUser } = useUserContext();

  const {theme} = useContext(MyThemeContext)

  // similar handler functions
  //   const handleNameChange = (e) => setFirstName(e.target.value);
  //   const handleLastNameChange = (e) => setLastName(e.target.value);
  //   const handleEmailChange = (e) => setEmail(e.target.value);

  function handleSubscribe() {
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    resetFirstName();
    resetLastName();
    resetEmail();
    // setStatus("Thanks for subscribing!");
    handleUpdateUser({
      name: inputPropsFirstName.value + " " + inputPropsLastName.value,
      id: 99,
    });
  }

  if (currentUser) {
    return (
      <div className="componentBox "
        style={{backgroundColor: theme.background, color:theme.foreground}}>
        <p>Thanks for subscribing {currentUser.name}!</p>
      </div>
    );
  }

  return (
    <div className="SubscribeForm componentBox"
    style={{backgroundColor: theme.background, color:theme.foreground}}
    >
      <label>
        First name: {/* form inputs with similar props */}
        <input
          //   value={inputPropsFirstName.value}
          //   onChange={inputPropsFirstName.onChange}
          {...inputPropsFirstName}
        />
      </label>

      <label>
        Last name: {/* form inputs with similar props */}
        <input
          //   value={inputPropsLastName.value}
          //   onChange={inputPropsLastName.onChangee}
          {...inputPropsLastName}
        />
      </label>

      <label>
        Email: {/* form inputs with similar props */}
        <input
          //   value={inputPropsEmail.value}
          //   onChange={inputPropsEmail.onChange}
          {...inputPropsEmail}
        />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      {/* <div>{status}</div> */}
    </div>
  );
}
