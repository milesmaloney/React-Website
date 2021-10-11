//import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import LocalClock from './LocalClock.jsx';
import ImageScroller from './ImageScroller.jsx';
import Page from './Page.jsx';

/*
TODO:
  Create Main component:
    This should take an array of up to components and an array of 9 boolean values to denote which parts of a 3x3 grid will be used and how it should be arranged
  Create Main subcomponents: 
    These should each take up to 3 components and 3 boolean values that denote the 3 sections of a row as well as the height of that row
*/


/*Page boolean array goes as follows: [headerExists, sidebarExists, footerExists]*/
function App() {
  return (
    <div id = "App">
      <Page pageType = 'home'/>
    </div>
  )
/*Commented out this return statement to test page react component
  return (
    <div id = "App">
      <Header leftDiv = {true} midDiv = {true} rightDiv = {true} leftContent = {<ImageScroller />} midContent = {<h1>Yo what up G? It's me! Middle guy!</h1>} rightContent = {<ImageScroller/>}/>
      <Sidebar headerExists = {false}/>
      <div id = "main">
        <ImageScroller />
      </div>
      <Footer leftDiv = {true} midDiv = {true} rightDiv = {true} leftContent = {<LocalClock/>} midContent = {<h1>Hi there! It's me! The middle content!</h1>} rightContent = {<ImageScroller/>}/>
    </div>
  )
*/
/*Commented out this return statement to test style-based react components
  return (
    <div id = "App">
      <div id = "header">
        <div id = "headerLeft">
          headerLeft
        </div>
        <div id = "headerMiddle">
          headerMiddle
        </div>
        <div id = "headerRight">
          <LocalClock/>
        </div>
      </div>
      <div id = "sidebar">
        <div id = "sidebarMain">
          sidebarMain
        </div>
        <div id = "sidebarBottom">
          sidebarBottom
        </div>
      </div>
      <div id = "main">
        <div id = "mainTop">
          <div id = "mainTopLeft">
            <ImageScroller/>
          </div>
          <div id = "mainTopRight">
            mainTopRight
          </div>
        </div>
        <div id = "mainCenter">
          <div id = "mainCenterLeft">
            mainCenterLeft
          </div>
          <div id = "mainCenterRight">
            mainCenterRight
          </div>
        </div>
        <div id = "mainBottom">
          <div id = "mainBottomLeft">
            mainBottomLeft
          </div>
          <div id = "mainBottomRight">
            mainBottomRight
          </div>
        </div>
      </div>
      <div id = "footer">
        footer
      </div>
    </div>
  );
*/
}

export default App;
