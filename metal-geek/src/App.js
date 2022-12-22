import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className = "App-header">
          <Header />
        </div>

        <div className = "App-main">
          <Main />
        </div>

        <div className = "footer">
          <Footer />
        </div>

    </div>
  );
}

export default App;