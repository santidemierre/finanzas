import React, { useState } from 'react';

function App() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handleTransactionSubmit = (event) => {
    event.preventDefault();
    setTransactions([...transactions, { description, amount, category }]);
    setDescription('');
    setAmount(0);
    setCategory('');
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, newCategory]);
    setNewCategory('');
  };

  const totalAmount = transactions.reduce(
    (total, transaction) => total + Number(transaction.amount),
    0
  );

  return (
    <div className="p-5 flex">
      <div className="w-2/5 space-y-8">
        <form onSubmit={handleTransactionSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="description" className="text-lg font-semibold">
              Descripción:
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-lg font-semibold">
              Gasto:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-lg font-semibold">
              Categoría:
            </label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="border rounded p-2"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Agregar
          </button>
        </form>
        <form onSubmit={handleCategorySubmit} className="space-y-4">
          <div className="flex flex-col border">
            <label htmlFor="newCategory" className="text-lg font-semibold">
              Nueva Categoría:
            </label>
            <input
              type="text"
              id="newCategory"
              value={newCategory}
              onChange={(event) => setNewCategory(event.target.value)}
              className="border rounded p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Agregar
          </button>
        </form>
      </div>
      <div className="w-3/5 ml-8 space-y-8">
        <ul className="">
          {transactions.map((transaction) => (
            <li key={transaction.description} className="">
              Descripción: {transaction.description} - Categoría:{' '}
              {transaction.category} - Gasto: ${transaction.amount}
            </li>
          ))}
        </ul>
        <p>Total: ${totalAmount}</p>
      </div>
    </div>
  );
}

export default App;