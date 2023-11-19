import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function LoginFormPage() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  // new state value for showing submission messages to user
  const [submitResult, setSubmitResult] = useState("");
  const [nbLogInAttempts, setNbLogInAttempts] = useState(3);

  const { currentUser, handleUpdateUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    // add some password validation
    if (userEmail.length === 0) {
      setSubmitResult("Email cannot be empty");
      setNbLogInAttempts(nbLogInAttempts - 1);
    } else if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setNbLogInAttempts(nbLogInAttempts - 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setNbLogInAttempts(nbLogInAttempts - 1);
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };

  if (nbLogInAttempts === 0 || submitResult === "Successful login.") {
    return (
      <div className="LoginForm componentBox">
        {nbLogInAttempts === 0 && <button onClick={() => setNbLogInAttempts(3)}>Reset log In</button>}
        {submitResult === "Successful login." && (
          <>
            <p>{submitResult}</p>
            <p>Welcome {currentUser.email}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => {
                console.log(e.target.value);
                // Add JS code to check that your email contains "@"

                setUserEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Phone number:
            {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
            <input
              type="text"
              value={userPhone}
              name="userPhone"
              onChange={(e) => {
                console.log(e.target.value);
                // Add JS code to check that your email contains "@"
                const valuePutByUser = e.target.value;
                if (valuePutByUser.includes("a")) {
                  setSubmitResult("Phone number cannot contain letters");
                } else setUserPhone(valuePutByUser);
              }}
            />
          </label>
        </div>
        {/* same form code as previously, BUT now includes <form> and <button> */}
        <button>Log In</button>
        <p>Nb Log in attempts remaining: {nbLogInAttempts}</p>
      </form>
    </div>
  );
}


// import { useState } from "react";

// export default function LoginFormPage() {
//   // input state values always need to be strings - empty initially
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [userPhone, setUserPhone] = useState("");
//   // new state value for showing submission messages to user
//   const [submitResult, setSubmitResult] = useState("");
//   const [nbLogInAttempts, setNbLogInAttempts] = useState(3);

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reloading on form submit
//     // add some password validation
//     if (userEmail.length === 0) {
//       setSubmitResult("Email cannot be empty");
//       setNbLogInAttempts(nbLogInAttempts - 1);
//     } else if (userPassword.length < 5) {
//       setSubmitResult("Password must be at least 5 characters long");
//       setNbLogInAttempts(nbLogInAttempts - 1);
//     } else if (userPassword === userEmail) {
//       setSubmitResult("Password must not match email address");
//       setNbLogInAttempts(nbLogInAttempts - 1);
//     } else {
//       setSubmitResult("Successful login.");
//     }
//   };

//   if (nbLogInAttempts === 0 || submitResult === "Successful login.") {
//     return (
//       <div className="LoginForm componentBox">
//         {nbLogInAttempts === 0 && <button onClick={() => setNbLogInAttempts(3)}>Reset log In</button>}
//         {submitResult === "Successful login." && <p>{submitResult}</p>}
//       </div>
//     );
//   }

//   return (
//     <div className="LoginForm componentBox">
//       <form onSubmit={handleSubmit}>
//         <div className="formRow">
//           <label>
//             Email Address:
//             {/* Controlled form element needs both value and onChange.
//     onChange handler uses event param e to access target value.
//     Whenever user types, new value is stored in state. */}
//             <input
//               type="email"
//               value={userEmail}
//               name="userEmail"
//               onChange={(e) => {
//                 console.log(e.target.value);
//                 // Add JS code to check that your email contains "@"

//                 setUserEmail(e.target.value);
//               }}
//             />
//           </label>
//         </div>
//         <div className="formRow">
//           <label>
//             Password:
//             <input
//               type="password"
//               value={userPassword}
//               name="password"
//               onChange={(e) => setUserPassword(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="formRow">
//           <label>
//             Phone number:
//             {/* Controlled form element needs both value and onChange.
//     onChange handler uses event param e to access target value.
//     Whenever user types, new value is stored in state. */}
//             <input
//               type="text"
//               value={userPhone}
//               name="userPhone"
//               onChange={(e) => {
//                 console.log(e.target.value);
//                 // Add JS code to check that your email contains "@"
//                 const valuePutByUser = e.target.value;
//                 if (valuePutByUser.includes("a")) {
//                   setSubmitResult("Phone number cannot contain letters");
//                 } else setUserPhone(valuePutByUser);
//               }}
//             />
//           </label>
//         </div>
//         {/* same form code as previously, BUT now includes <form> and <button> */}
//         <button>Log In</button>
//         <p>Nb Log in attempts remaining: {nbLogInAttempts}</p>
//       </form>
//     </div>
//   );
// }