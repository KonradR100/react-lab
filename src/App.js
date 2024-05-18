import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('krysz@agh.edu.pl');
    function handleChange(event) {
        setEmail(event.target.value);
    }

    // function handleClick(){
    //     alert(email);
    // }

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
          <input value={email} type="text" onChange={handleChange} className="longfield"/>
          <button onClick={() => alert(email)}> Wyświetl mój e-mail w alercie</button>

      </div>

  );

}
export default App;
