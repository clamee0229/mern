import logo from './logo.svg';
import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person 
      firstName = {'Jane'} 
      lastName = {'Doe'} 
      age = {45} 
      hair = {'Black'}>
      </Person>

      <Person 
      firstName = {'John'} 
      lastName = {'Smith'} 
      age = {88} 
      hair = {'Brown'}>
      </Person>

      <Person 
      firstName = {'Millard'} 
      lastName = {'Fillmore'} 
      age = {50} 
      hair = {'Brown'}>
      </Person>

      <Person 
      firstName = {'Maria'} 
      lastName = {'Smith'} 
      age = {62} 
      hair = {'Brown'}>
      </Person>
    </div>
  );
}

export default App;
