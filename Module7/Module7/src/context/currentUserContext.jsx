import { createContext } from "react";

//One that provide states to all children. I need to export so that other components can use this
export const CurrentUserContext = createContext({ name: "Alice", id: 1 });

// export function CurrentUserProvider({ children, currentUser }) {
// //   const [currentUser, setCurrentUser] = useState({ name: "Alice", id: 1 });

//   return (
//     <>
//       <CurrentUserContext.Provider value={currentUser}>
//         {children}
//       </CurrentUserContext.Provider>
//     </>
//   );
// }
