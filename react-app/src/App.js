import './App.css';
import Connected from './components/Connected/Connected';
import Header from './components/Header/Header';
import NewDelivery from './components/NewDelivery/NewDelivery';

function App() {
  return (
    <div className="App f-c">
      <main>
        <Header />
        <Connected />
        <NewDelivery />
      </main>
    </div>
  );
}

export default App;
