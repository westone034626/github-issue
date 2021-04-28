import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Label from './components/Label';

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
      <Label message="bug" fontColor="white" buttonColor="red" />
    </div>
  );
}

export default App;
