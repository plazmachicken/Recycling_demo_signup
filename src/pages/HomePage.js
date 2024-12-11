import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center text-gray-700">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Recycling Hub</h1>
      <p className="text-lg mb-6 text-center w-3/4">
        Recycling helps preserve the planet by reducing waste and conserving
        natural resources. Join us in creating a cleaner, greener future by
        recycling everyday items like plastics, paper, and metals.
      </p>
      <ul className="list-disc pl-10 text-left">
        <li>Reuse items whenever possible.</li>
        <li>Sort your waste into recyclables and non-recyclables.</li>
        <li>Encourage your community to adopt recycling habits.</li>
      </ul>
    </div>
  );
};

export default HomePage;
