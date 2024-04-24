import { useState } from 'react'

// stores
import useBooksStore from '../stores/BooksStore'

import './TelephoneBooksForm.css'

function TelephoneBooksForm() {
  const [telephoneBookData, setTelephoneBookData] = useState({
    name: "",
    surname: "",
    phoneNumber: ""
  })

  const addBook = useBooksStore(state => state.addBook)

  const handleSubmit = e => {
    e.preventDefault()
    addBook(telephoneBookData)
    setTelephoneBookData({
      name: "",
      surname: "",
      phoneNumber: ""
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input className='formInput' type="text" value={telephoneBookData.name} onChange={e => setTelephoneBookData({...telephoneBookData, name: e.target.value})} placeholder="İsim"/> <br />
      <input className='formInput' type="text" value={telephoneBookData.surname}  onChange={e => setTelephoneBookData({...telephoneBookData, surname: e.target.value})} placeholder="Soyisim"/> <br />
      <input className='formInput' type="number" value={telephoneBookData.phoneNumber} onChange={e => setTelephoneBookData({...telephoneBookData, phoneNumber: e.target.value})} placeholder="Telefon Numarası"/> <br />
      <button className='formButton' type="submit">Kaydet</button>
    </form>
  );
}

export default TelephoneBooksForm;
