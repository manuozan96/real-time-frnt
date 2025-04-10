import React, { useState } from "react";
import "../components/QuoteForm.css"

export const QuoteForm: React.FC = () => {
  const [client, setClient] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [products, setProducts] = useState<{ name: string; price: number }[]>(
    []
  );

  const handleAddProduct = () => {
    if (productName && productPrice > 0) {
      setProducts([...products, { name: productName, price: productPrice }]);
      setProductName("");
      setProductPrice(0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const total = products.reduce((sum, p) => sum + p.price, 0);

    const newQuote = {
      client,
      products,
      total,
      date: new Date().toISOString(),
    };

    await fetch("https://real-time-back-production.up.railway.app/api/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuote),
    });

    // Reseteamos el formulario después de enviar
    setClient("");
    setProducts([]);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <h2>Crear Nueva Cotización</h2>

      <input
        type="text"
        placeholder="Cliente"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        required
      />

      <div className="product-fields">
        <input
          type="text"
          placeholder="Producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
        <button type="button" onClick={handleAddProduct} className="add-product">
          Agregar Producto
        </button>
      </div>

      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price.toLocaleString()}
          </li>
        ))}
      </ul>

      <button type="submit" className="submit-button">
        Guardar Cotización
      </button>
    </form>
  );
};
