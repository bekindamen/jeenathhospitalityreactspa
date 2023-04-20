import  {Component} from "react";
import "./App.css";
import Header from "./Components/Header";
import InfoCard from "./Components/InfoCards";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import ContactUs from "./Components/ContactUs";
import BookASample from "./Components/BookASample";
import AboutUs from "./Components/AboutUs";
import axios from 'axios';

export default class App extends Component {
 constructor(props){
  super(props)
  this.state={
    data : []
  }
 }
 async fetchImages() {
 //fetching https://ppu8kjkqyk.execute-api.ap-south-1.amazonaws.com/one

  await axios.get('https://ppu8kjkqyk.execute-api.ap-south-1.amazonaws.com/one')
 .then(response => {
  this.setState({
    data : response
  })
 })
 .catch(error => {
   console.log(error);
 }); 

}


  componentDidMount(){
  this.fetchImages()

  }
 

 
render(){
this.fetchImages()
    return   (
      <Router>
      <div className="App">
        <Header />
        <p>{this.state.data}wwd</p>
        <button style={{height:'40px', width:'40px', color:'black'}} onClick={this.fetchImages}></button>
        <Routes>
        <Route path="/" element={<div>
          <InfoCard
          cards={ this.state.data  }
        />
        </div>}/>    
        <Route path="/aboutus" element={<div>
           <AboutUs/>
        </div>}/> 
        <Route path="/bookasample" element={<div>
           <BookASample/>
        </div>}/> 
        <Route path="/contactus" element={<div>
           <ContactUs/>
        </div>}/> 
        </Routes>
        <Footer/>
      </div> </Router>
    );
   }
}
