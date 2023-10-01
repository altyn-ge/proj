import './App.css';
import Page from './custom_components/page';
import Header from './custom_components/header';
import data from './data/saved.json'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Page tables={data.tables}>

        </Page>
      </header>
    </div>
  );
}

export default App;
