
import './App.css';
import Search from './components/search/Search';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
