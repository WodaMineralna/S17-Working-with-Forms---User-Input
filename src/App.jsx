import Header from "./components/Header.jsx";
import Login from "./components/useStateLogin.jsx";
// import Signup from "./components/Signup.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        <Login />
      </main>
    </>
  );
}

export default App;
