import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const totalPrice = card.reduce(
    (total, item) => (total += item.card.price),
    0
  );

  const deleteItem = (index) => {
    dispatch({
      type: "SEPETTEN_CİKAR",
      payload: index
    });
  };

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>
      <h3> Toplam Tutar {totalPrice} </h3>
      {card.map((book, index) => (
        <div className="book" key={index.id}>
          <img src={book.card.image} alt={book.card.name} />
          <div>
            <p>Yazar: {book.card.author}</p>
            <p>Fiyat:{book.card.price}</p>
            <p>Toplam: {book.card.price}</p>
            <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
            <button>-</button>
            <button onClick={() => deleteItem(index)}>Sepetten Çıkar</button>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
