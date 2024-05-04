import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import Cards from "./Cards";
import axios from "axios";
function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/article")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
      });
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 ml-36 flex max-sm:grid-cols-1 gap-4">
          {articles.map(article => (
            <Cards key={article.title} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Article;


