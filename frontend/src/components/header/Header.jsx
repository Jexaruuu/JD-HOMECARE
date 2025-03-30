import React from "react";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-green-700">
          Book trusted help for home tasks
        </h2>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="What do you need help with?"
            className="border p-2 w-2/3 rounded"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded ml-2">
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
