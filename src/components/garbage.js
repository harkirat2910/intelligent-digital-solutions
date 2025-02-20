import React from "react";

const Card = () => {
  const cards = [
    {
      id: 1,
      image: "/img/svg/noTextLogo.svg", // Update with actual image path
      text: "E-Hospital",
      link: "https://www.e-hospital.ca/", // Replace with your desired URL
    },
    {
      id: 2,
      image: "/img/svg/noTextLogo.svg", // Update with actual image path
      text: "Noor-Bot",
      link: "https://example.com", // Replace with your desired URL
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-lg p-6 w-80 text-center border border-gray-300"
        >
          <img src={card.image} alt={card.title} className="w-24 h-24 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{card.text}</p>
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Visit
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;