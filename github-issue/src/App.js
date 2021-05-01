import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Label from './components/Label';
import LabelItem from './components/LabelItem';
import { useToggle, useFetchData } from './hooks';

function App() {
  const [currentTab, setCurrentTab] = useToggle('labels');
  const REQUEST_URL = `http://localhost:3001/${currentTab}`;
  const [data, isLoading] = useFetchData(REQUEST_URL);
  const onBtnClick = (value) => {
    setCurrentTab(value);
  };
  return (
    <div className="App">
      <Header message="ISSUES" iconName="book" />
      <Button
        message="Labels"
        fontColor="white"
        buttonColor="blue"
        iconName="label"
        onClick={() => {
          onBtnClick('labels');
        }}
      />
      <Button
        message="Milestones"
        fontColor="black"
        buttonColor="white"
        iconName="mileStone"
        onClick={() => {
          onBtnClick('mileStones');
        }}
      />
      <Button message="New label" fontColor="white" buttonColor="green" />
      {isLoading ? (
        <LabelItem message="loading..." /> // Would implement a loading component later.
      ) : (
        data.map((item) => (
          <>
            <LabelItem message={item.description}>
              <Label
                message={item.name}
                fontColor="white"
                buttonColor={item.color}
              />
            </LabelItem>
          </>
        ))
      )}
    </div>
  );
}

export default App;
