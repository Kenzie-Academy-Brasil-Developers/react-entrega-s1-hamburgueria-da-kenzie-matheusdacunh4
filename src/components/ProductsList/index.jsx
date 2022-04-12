import "./styles.css";
import Product from "../Product";

const ProductsList = ({ products, filteredProducts, handleClick }) => {
  return (
    <section className="showcase">
      {filteredProducts.map((item) => (
        <Product key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ProductsList;
