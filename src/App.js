import "./App.css";
import Buttons from "./components/Buttons";
import ButtonsGroup from "./components/ButtonsGroup";
import CheckBoxes from "./components/CheckBoxes";
import RadioButtons from "./components/RadioButtons";
import Sliders from "./components/Sliders";
import RangeSlider from "./components/RangeSlider";
import SelectBox from "./components/SelectBox";
import Text from "./components/Text";
import Switches from "./components/Switches";
import BoxLayout from "./components/BoxLayout";
import ContainerLayout from "./components/ContainerLayout";
import GridSystem from "./components/GridSystem";
import HiddenComponent from "./components/HiddenComponent";
import TabComponent from "./components/TabComponent";
import MenuReactRouting from "./components/MenuReactRouting";

function App() {
  return (
    <div className="App">
      <h2>React Material-UI</h2>
      <Buttons />
      <br />
      <br />
      <ButtonsGroup />
      <br />
      <br />
      <CheckBoxes />
      <br />
      <br />
      <RadioButtons />
      <br />
      <br />
      <Sliders />
      <br />
      <br />
      <RangeSlider />
      <br />
      <br />
      <SelectBox />
      <br />
      <br />
      <Text />
      <br />
      <br />
      <Switches />
      <br />
      <br />
      <BoxLayout />
      <br />
      <br />
      <ContainerLayout />
      <br />
      <br />
      <GridSystem />
      <br />
      <br />
      <HiddenComponent />
      <br />
      <br />
      <TabComponent />
      <br />
      <br />
      <MenuReactRouting />
      <br />
      <br />
    </div>
  );
}

export default App;
