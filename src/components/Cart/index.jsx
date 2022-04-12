import "./styles.css";

const Cart = ({ currentSale }) => {
  const totalCart = () => {
    return currentSale.reduce((soma, atual) => soma + atual.price, 0);
  };

  return (
    <>
      {currentSale.length > 0 ? (
        <aside className="cart">
          <div className="cart_title">
            <h3>Carrinho de compras</h3>
          </div>
          <div className="cart_container">
            {currentSale.map((item) => {
              return (
                <div className="cart_container_item" key={item.id}>
                  <img
                    className="cart_container_item_img"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="cart_container_item_description">
                    <h3>{item.name}</h3>
                    <span>{item.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart_total">
            <div>
              <hr className="hr" />
            </div>
            <div className="cart_total_inner">
              <span className="cart_total_inner_name">Total</span>
              <span className="cart_total_inner_price">
                {totalCart().toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        </aside>
      ) : (
        <aside className="cart-empity">
          <div className="cart_title">
            <h3>Carrinho de compras</h3>
          </div>
          <div className="cart_container-empity">
            <h3 className="cart_container_text-empity">Sua sacola está vazia</h3>
            <span className="cart_container_span-empity" >Adicione itens</span>
          </div>
        </aside>
      )}
    </>
  );
};

export default Cart;
