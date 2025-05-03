import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = ({data}) => {
  const [allBooks, setAllbooks] = useState([]);

  // useEffect(()=> {
  //     fetch('booksData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //     })
  // })

  // const bookPromise = fetch("/public/booksData.json").then((res) => res.json());

  return (
    <div>

<div className="bg-gray-100 flex flex-col items-center p-6">
                    <h1 className="text-4xl font-bold mb-8">Books</h1>
                    <div className="grid grid-cols-3 gap-6">
   
      <Suspense fallback={<span>Loading...</span>}>
      

        {
        data.map((singleBook)=>  <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
        }

      </Suspense>
      </div>
      </div>
    </div>
  );
};

export default Books;
