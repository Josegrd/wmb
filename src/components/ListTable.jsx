import { useEffect, useState } from "react";

export default function ListTable() {
  const [isEdit, setIsEdit] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  const [tables, setTables] = useState(() => {
    const savedTables = localStorage.getItem("tables");
    return savedTables
      ? JSON.parse(savedTables)
      : [
          { id: 1, capacity: 4, available: true },
          { id: 2, capacity: 2, available: false },
          { id: 3, capacity: 6, available: true },
        ];
  });

  const [newTable, setNewTable] = useState({
    id: "",
    capacity: "",
    available: true,
  });

  useEffect(() => {
    localStorage.setItem("tables", JSON.stringify(tables));

    
  }, [tables]);


  useEffect(() => {
    const isValidCapacity = newTable.capacity !== "" && parseInt(newTable.capacity) > 0;
    setIsTrue(isValidCapacity);
  }, [newTable.capacity]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTable({ ...newTable, [name]: value });
  };

  const handleAddorEditTable = (e) => {
    e.preventDefault();
    if (newTable.id === "") {
      setTables([
        ...tables,
        {
          ...newTable,
          id: tables.length + 1,
          capacity: parseInt(newTable.capacity),
        },
      ]);
    } else {
      const updatedTables = tables.map((table) =>
        table.id === newTable.id
          ? { ...table, capacity: parseInt(newTable.capacity) }
          : table
      );
      setTables(updatedTables);
    }

    setIsEdit(false);
    setNewTable({ id: "", capacity: "", available: true });
  };

  const handleDeleteTable = (index) => {
    const newTableList = tables.filter((_, i) => i !== index);
    setTables(newTableList);
  };

  const handleEditTable = (index) => {
    setIsEdit(true);
    const tableToEdit = tables[index];
    setNewTable(tableToEdit);
  };

  const handleToggleAvailability = (index) => {
    const updatedTables = tables.map((table, i) =>
      i === index ? { ...table, available: !table.available } : table
    );
    setTables(updatedTables);
  };

  return (
    <>
      <div className={`container h-[100vh] py-20`}>
        <h1 className="text-[#10375C] lg:text-6xl md:text-5xl text-4xl font-bold underline mb-10">
          Table List
        </h1>
        <form onSubmit={handleAddorEditTable} className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              value={newTable.capacity}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              ${isTrue ? "" : "disabled:bg-gray-500 cursor-not-allowed "}`}
            disabled={!isTrue}
          >
            {isEdit ? "Update Table" : "Add Table"}
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tables.map((table, index) => (
            <div
              key={table.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Table {table.id}</div>
                <p className="text-gray-700 text-base">
                  Capacity: {table.capacity}
                </p>
                <p className="text-gray-700 text-base">
                  Status: {table.available ? "Available" : "Not Available"}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEditTable(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleToggleAvailability(index)}
                    className={`font-bold py-2 px-4 rounded ${
                      table.available
                        ? "bg-green-500 hover:bg-green-700"
                        : "bg-red-500 hover:bg-red-700"
                    } text-white`}
                  >
                    {table.available ? "Set Unavailable" : "Set Available"}
                  </button>
                  <button
                    onClick={() => handleDeleteTable(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
