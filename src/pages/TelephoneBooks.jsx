// stores
import useBooksStore from '../stores/BooksStore'

// components
import TelephoneBooksForm from '../components/TelephoneBooksForm';

function TelephoneBooks() {
  const books = useBooksStore(state => state.books);
  const removeBook = useBooksStore(state => state.removeBook)

  return (
    <>
      {books.map((item, i) => (
        <div key={i}>
          <span>{item.name}</span>
          <span>{item.surname}</span>
          <span>{item.phoneNumber}</span>
          <button onClick={() => removeBook(item.phoneNumber)}>Sil</button>
        </div>
      ))}
        <TelephoneBooksForm />
      </>
  );
}

export default TelephoneBooks;
