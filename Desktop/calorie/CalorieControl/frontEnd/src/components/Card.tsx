import React from 'react';
import { Article } from '../interface'; // Ensure this path is correct
import img from '../assets/Calories_1200x628.jpg'; // Ensure this path is correct

const Card = (props: Article) => {
  return (
    <a href={props.url} className="block">
      <div className="relative h-[300px] w-[240px] text-wrap border-[1px] border-gray-200 my-10 rounded-md overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img src={props.urlToImage || img} alt="" className="h-[200px] w-full object-cover" />

        <div className="bg-white p-2">
          <p className="text-gray-900 text-lg font-medium mb-2 ">{props.title}</p>
         
        </div>
      </div>
    </a>
  );
}

export default Card;
