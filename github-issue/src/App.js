import './App.css';
import Header from './components/Header';
import Button from './components/Button';

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
    </div>
  );
}

export default App;
