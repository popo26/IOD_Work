import { UserProvider } from "./context/UserContext";
import MyThemeProvider from "./context/MyThemeContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

import "./App.css";

// ++ Update imports in AppRoutes.jsx to include these new files
// Update App.jsx as shown - all components rendered via routes
function App() {
  return (
    <UserProvider>
      <MyThemeProvider>
        <NavBar />
        <AppRoutes />
      </MyThemeProvider>
    </UserProvider>
  );
} // ++ Create a Footer component as well and add under AppRoutes

export default App;
