import "./styles.css";

const header = ({ showProducts }) => {
  return (
    <header className="header">
      <div className="header_logo">
        <span className="header_logo_burguer">Burguer</span>
        <span className="header_logo_kenzie"> Kenzie</span>
      </div>
      <form
        className="header_form"
        onSubmit={(e) => {
          e.preventDefault();
          showProducts(e);
        }}
      >
        <input
          className="header_input"
          type="text"
          placeholder="Digitar pesquisa"
        />
        <button className="header_button" type="submit">
          Pesquisar
        </button>
      </form>
    </header>
  );
};

export default header;
