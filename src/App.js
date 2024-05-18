import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('krysz@agh.edu.pl');
    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message = <div>Ale masz krótki adres!</div>
    if (email.length > 15) {
        message = <div>Twój adres jest stanowczo za długi!</div>;
    } else if (email.length > 5) {
            message = <div>Twój adres jest git.</div>;
    }

  return (
      <div>

        <h1>System do zapisów na zajęcia</h1>
          <h2>Twój e-mail to {email}</h2>
          {message}
          <input value={email} type="text" onChange={handleChange}/>
      </div>

  );

}

// "Ale masz krótki adres!"
// "Twój adres jest git"
// "Twój adres jest stanowczo za długi"
export default App;
