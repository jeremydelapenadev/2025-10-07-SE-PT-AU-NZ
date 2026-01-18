import BookList from "./BookList.jsx";
import BookFilter from "./BooksFilter.jsx";

function Books(props) {
  const books = [
    "Harry Potter",
    "Lord of the Rings",
    "The Hobbit",
    "Game of Thrones",
  ];

  return (
    <>
      <h1>List of books</h1>
      <div>
        <h2>Here is the list of books</h2>
        <BookList books={books}></BookList>
      </div>
      <div>
        <h3>Here is the filtered list of books</h3>
        <BookFilter books={books}></BookFilter>
      </div>
    </>
  );
}

export default Books;
