// stores
import useBooksStore from '../stores/BooksStore'

// components
import TelephoneBooksForm from '../components/TelephoneBooksForm';

import './TelephoneBooks.css'

function TelephoneBooks() {
  const books = useBooksStore(state => state.books);
  const removeBook = useBooksStore(state => state.removeBook)

  return (
    <>
      {books.map((item, i) => (
        <div key={i} className="bookContainer">
          <span className='booksItem'>{item.name}</span>
          <span className='booksItem'>{item.surname}</span>
          <span className='booksItem'>{item.phoneNumber}</span>
          <button className="removeButton" onClick={() => removeBook(item.phoneNumber)}>Sil</button>
        </div>
      ))}
        <TelephoneBooksForm />
    </>
  );
}

export default TelephoneBooks;
