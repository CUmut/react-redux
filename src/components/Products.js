import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const bookList = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  const handleAddBasket = (card) => {
    dispatch({ type: "SEPETE_EKLE", payload: { card } });
  };

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/card">Sepetim</Link>
      </h2>
      {bookList.map((book, i) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: {book.price}</p>
            <button onClick={() => handleAddBasket(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
