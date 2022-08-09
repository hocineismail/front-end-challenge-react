import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AbsencesManagement from "./components/absencesManagement/AbsencesManagement";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <div data-test-id="component-app">
        <AbsencesManagement />
      </div>
    </Provider>
  );
}

export default App;
