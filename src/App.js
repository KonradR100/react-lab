import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState();
    const [isAutenticated, setIsAutenticated] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }
    function logout(){
        setIsAutenticated(false);
        setEmail('');
    }

    let content;
    if (isAutenticated) {
        content = <div>
            <h2>Witaj {email}!</h2>
            <button onClick={logout}>Wyloguj</button>
        </div>;
    } else {
        content = <div>
            Zaloguj się e-mailem
            <input value={email}
                   type="text"
                   onChange={handleChange}
                   className={"longfield"}
                   />
            <button onClick={() => setIsAutenticated(true)}>Wchodzę</button>
        </div>;
    }
  return (
      <div>
        <h1>Witaj w systemie do zapisów na zajęcia</h1>
          {content}

      </div>

  );

}


// function handleClick(){
//     alert(email);
// }
//
// let message = <div>Ale masz krótki adres!</div>
// if (email.length > 15) {
//     message = <div>Twój adres jest stanowczo za długi!</div>;
// } else if (email.length > 5) {
//         message = <div>Twój adres jest git.</div>;
// }
export default App;
