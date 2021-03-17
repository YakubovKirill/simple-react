import './App.css';
import Connected from './components/Connected/Connected';
import Deliveries from './components/Deliveries/Deliveries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NewDelivery from './components/NewDelivery/NewDelivery';

function App() {
  return (
    <div className="App">
      <div className="f-c">
        <main>
          <Header />
          <Connected />
          <NewDelivery />
          <Deliveries />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
