import Dropdown from "./stories/Dropdown";
import "./App.css";
import dummy from "./assets/dummy.json";

function App() {
  return (
    <div className="max-w-2xl mx-auto py-[40px] px-[20px]">
      <Dropdown
        multiple={true}
        renderOption={true}
        withSearch={true}
        options={dummy}
        portal={false}
        outlined={false}
        optionLabel="Football Club"
        id="dropdown"
      />
    </div>
  );
}

export default App;
