import React from "react";

function Cards({ article }) {
  return (
    <div className="mt-4 my-3">
      <div className="flex card h-96 w-80 bg-base-100 shadow-xl cursor-pointer px-2 py-1">
        <figure>
          <img src={article.image} alt={article.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p>{article.content}</p>
          <div className="card-actions justify-end">
            <div className="cursor-pointer px-2 py-1 rounded full border-2px hover:bg-red-500 hover:text-white duration-200">Read</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;


