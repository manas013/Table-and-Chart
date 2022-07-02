import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Linechart from './Linechart';
import Tab from './Tab';

function App() {
  return (
    <div className="App">
     <div className='box'>
      <p>Name: Manas Mukherjee</p>
      <p>Email: mukherjee18m@gmail.com</p>
      <p>Contact-Number: 9123053121</p>
     </div>
      <Tab/>
     {/* <Table/>
     <Linechart/> */}
     
    </div>
  );
}

export default App;
