import React from 'react';
//Components
import Title from './components/Title';
import Balance from './components/Balance';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
//Provider
import { GlobalProvider } from './context/GlobalState';
// CSS
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Title />
      <div className="container">
        <Balance />
        <Summary />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;