
import './App.css';
import Account from './app/Account';
import Header from './app/shared/Header';

function App() {
  return (
    <div className="container container-fluid bg-light" style={{ marginTop: 20, padding: 20 }}>
      <Header />
      <Account />
    </div>
  );
}

export default App;
