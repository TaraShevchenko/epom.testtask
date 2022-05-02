import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Form from "./components/Form/Form";


const App = () => (
  <div className="container">
    <Header/>
    <main className="main">
      <Content/>
      <Form/>
    </main>
  </div>
);

export default App;
