import { useState } from "react";
import Router from "./Router";
import { authService } from "../fbase";

function App() {
  const user = authService.currentUser;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(user);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
