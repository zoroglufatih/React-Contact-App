import React, { useEffect, useState } from 'react'
import Form from './Form/İndex'
import List from './List'
import styles from "./styles.css"

function Contacts() {

    const [contacts, setContacts] = useState([
      {
        fullname: "Fatih",
        phone_number: "123123"
      },{
        fullname: "Cihat",
        phone_number:"456456"
      },{
        fullname: "Rıdvan",
        phone_number: "789789"
      }
    ]);

    useEffect(() => {
        console.log(contacts);
    },[contacts])
    
    
    
        
  return (
    <div id="container">
      <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />

    </div>
  )
}

export default Contacts