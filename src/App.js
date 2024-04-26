import { useState } from "react";
import UseMemoFunction from "./componets/Hooks/USEMEMO/index"
import HooksFunction from "./pages/hooks"
import {ThemeContext} from "./contexts/themes"
function App() {
  const [mode, setMode] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={mode}>
        <div>
          {/* <RefHook/> */}
          {/* here is useMemo fn() */}
          <UseMemoFunction/>
          <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
            {mode ? "dark" : "light"}
          </button>
          <div className={`App ${mode}`}>
            <HooksFunction/>
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
