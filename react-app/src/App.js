import './App.css';
import Page from './Page.jsx';

/*This function serves as a container to render our app in*/
function App() {
  //Returns the home page (navigates to other pages [not links] through a state change)
  return (
    <div id = "App">
      <Page pageType = 'home'/>
    </div>
  )
}

export default App;
