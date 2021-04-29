import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Label from './components/Label';
import LabelItem from './components/LabelItem';

function App() {
  return (
    <div className="App">
      <Header message="ISSUES" iconName="book" />
      <Button
        message="Labels"
        fontColor="white"
        buttonColor="blue"
        iconName="label"
      />
      <Button
        message="Milestones"
        fontColor="black"
        buttonColor="white"
        iconName="mileStone"
      />
      <Button message="New label" fontColor="white" buttonColor="green" />
      <LabelItem message="hello world">
        <Label message="bug" fontColor="white" buttonColor="red" />
      </LabelItem>
      <LabelItem message="This is test LabelItem">
        <Label message="warning" fontColor="white" buttonColor="red" />
      </LabelItem>
      <LabelItem message="This is test LabelItem">
        <Label message="warning" fontColor="white" buttonColor="red" />
      </LabelItem>
    </div>
  );
}

export default App;
