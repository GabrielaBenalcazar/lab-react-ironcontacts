import contacts from "./contacts.json";
import { useState } from "react";
import "./App.css";

function App() {
    const contactsArr = contacts.splice(0, 5);

  const [contactsList, setContactsList] = useState(contactsArr);

  function newRandom() {


    let contactsCopy = [...contactsList]
  
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    contactsCopy.unshift(randomContact);

    setContactsList(contactsCopy);
  }




  

    return (
        <div className="App">
            <h1>IronContacts</h1>
            <button onClick={() => newRandom()}> Add Random Contact </button>
            <table>
                <thead>
                    <tr>
                        <th>Pictire</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won an Oscar</th>
                        <th>Won an Emmy</th>
                    </tr>
                </thead>

                <tbody>
                    {contactsList.map((contact) => (
                        <tr>
                            <td>
                                <img src={contact.pictureUrl} alt={contact.name} />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td>{contact.wonOscar ? "🏆" : ""}</td>
                            <td>{contact.wonEmmy ? "🏆" : ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
