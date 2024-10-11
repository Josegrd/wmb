import { useEffect, useState } from "react";

export default function ListFood() {
  const [food, setFood] = useState(() => {
    const savedFoods = localStorage.getItem("foods");
    return savedFoods ? JSON.parse(savedFoods) : [
    {
      name: "Nasi Goreng",
      price: 10000,
      img: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300026-Cover-resep-nasi-goreng-scaled.jpg",
    },
    {
      name: "Mie Goreng",
      price: 12000,
      img: "https://cdn0-production-images-kly.akamaized.net/rqfdE8NAgggV4Zg46ZsMqvUjDpU=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4162951/original/017212600_1663563648-shutterstock_2159757881.jpg",
    },
  ]});

  const [newFood, setNewFood] = useState({
    name: "",
    price: "",
    img: "",
  });

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(food));
  }, [food]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    setFood([...food, { ...newFood, price: parseInt(newFood.price) }]);
    setNewFood({ name: "", price: "", img: "" });
  };

  const handleDeleteFood = (index) => {
    const newFoodList = food.filter((_, i) => i !== index);
    setFood(newFoodList);
  };

  const handleEditFood = (index) => {
    const foodToEdit = food[index];
    setNewFood(foodToEdit);
    handleDeleteFood(index);
  };

  return (
    <>
      <div className={`container h-[100vh] py-20`}>
        <h1 className="text-[#02063D] mb-10 lg:text-6xl md:text-5xl text-4xl font-bold underline">
          Food List
        </h1>
        <form onSubmit={handleAddFood} className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={newFood.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={newFood.price}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="img"
              value={newFood.img}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Food
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {food.map((item, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                className="h-60 object-cover w-full"
                src={item.img}
                alt={item.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">Price: {item.price}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEditFood(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteFood(index)}
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
