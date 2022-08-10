import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AbsencesManagement from "./components/absencesManagement/AbsencesManagement";
import Provider from "./context/Provider";
import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <Provider>
      <div data-test-id="component-app">
        <Navbar style={{ backgroundColor: "#FEA33A" }}>
          <Container>
            <Navbar.Brand href="#home">Crew Meister</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <b>Ismail hocine</b>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="contain">
          <AbsencesManagement />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
