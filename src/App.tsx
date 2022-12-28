import Header from "./components/Header";
import Row from "./components/Row";
import requests from "./requests";
import './style/App.css'

function App() {  
  return (
    <div className="App">
      <Header />
      {requests.map((request, i) => <Row key={i} 
      title ={request.title} 
      fetchUrl={request.fetchUrl}
      />)}
    </div>
  );
}
export default App;
