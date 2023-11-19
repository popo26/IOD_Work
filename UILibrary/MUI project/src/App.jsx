import "./App.css";
import CustomCard from "./components/CustomCard";
import BasicGrid from "./components/BasicGrid";
import MUIForm from "./components/MUIForm";
import MUIDialog from "./components/MUIDialog";
import SxExample from "./components/SxEample";
import BasicUsage from "./components/BasicUsage";
// in App.jsx: import theme and provider, wrap around component tree
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "./themes/tealTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={tealTheme}>
        {/* App.jsx components */}
        <CustomCard title="Iguana">Green Lizard Card</CustomCard> <BasicGrid />
        <MUIForm />
        <MUIDialog text="Boo!" />
        <SxExample />
        <BasicUsage />
      </ThemeProvider>
    </>
  );
}

export default App;
