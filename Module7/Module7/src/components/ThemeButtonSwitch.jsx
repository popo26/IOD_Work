import { useContext } from "react";
import { themes, MyThemeContext } from "../context/myThemeContext";

export default function ThemeButtonSwitch() {
  const { setTheme, darkMode } = useContext(MyThemeContext);
  return (
    <button
      onClick={() => {
        if (darkMode) {
            console.log("Im in Dark Mode")
          setTheme(themes.light);
        } else setTheme(themes.dark);
      }}
    >
      Switch theme
    </button>
  );
}
