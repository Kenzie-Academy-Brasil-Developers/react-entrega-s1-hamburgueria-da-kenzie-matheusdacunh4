import "./styles.css";

const Product = ({ item, handleClick }) => {
  return (
    <div className="card">
      <div className="card_fig">
        <img className="card_img" src={item.img} alt={item.name} />
      </div>
      <h3 className="card_name">{item.name}</h3>
      <h4 className="card_category">{item.category}</h4>
      <span className="card_price">
        {item.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <button className="card_button" onClick={() => handleClick(item.id)}>
        Adicionar
      </button>
    </div>
  );
};

export default Product;
