import React from 'react';

const About_D = () => {
  return (
    <div className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-white rounded-lg shadow-md ">
      <img
        src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
        alt=""
        className="absolute inset-0 object-cover w-full h-full opacity-90 transition-opacity duration-200 ease-out"
      />
      <div className="card-content absolute mt-40 inset-0 flex flex-col justify-center items-start p-8 pt-25 opacity-1 transition-opacity duration-300 ease-out">
        <h2 className="text-lg font-semibold uppercase text-white">Yalaamanchilli <br/> Dushyanth</h2>
        <p className="mt-4 text-sm text-white">Developer</p>
        <a href="https://github.com/dushu-108/lwebtech-lab" className="mt-6 py-2 px-4 bg-blue-500 text-white text-sm font-semibold rounded inline-flex items-center transition-opacity duration-500 ease-in-out opacity-1">
          github
        </a>
      </div>
    </div>

    
  );
};

export default About_D;