import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmptyStateDashboard from './components/EmptyStateDashboard';
import DashboardActivity from './components/DashboardActivity';
import NewActivity from './components/NewActivity';
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      {/* <EmptyStateDashboard /> */}
      <DashboardActivity />
      {/* <NewActivity /> */}
      {/* <ListItem /> */}
    </div>
  );
}

export default App;
