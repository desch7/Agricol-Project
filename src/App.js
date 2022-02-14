import logo from './logo.svg';
import CreateFarmerComponent from './components/CreateFarmerComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import CreatePlantComponent from './components/CreatePlantComponent';
import CreateProjectComponent from './components/CreateProjectComponent';
import PlantListComponent from './components/PlantListComponent';
import FarmerListComponent from './components/FarmerListComponent';
import ProjectListComponent from './components/ProjectListComponent';

function App() {
  return (
    <div className="App">
      <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<ProjectListComponent/>}></Route>
      <Route path="/createPlant/:id" element={<CreatePlantComponent/>}></Route>
      <Route path="/createProject/:id" element={<CreateProjectComponent/>}></Route>
      <Route path="/plantList" element={<PlantListComponent/>}></Route>
      <Route path="/farmerList" element={<FarmerListComponent/>}></Route>
      <Route path="/createFarmer/:id" element={<CreateFarmerComponent/>}></Route>
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
