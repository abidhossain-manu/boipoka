import React from 'react';

const Book = ({ singleBook }) => {
    const { bookName, author, image } = singleBook;

    return (
        <div>
           
                <div className="w-80 p-6 bg-gray-50 rounded-lg shadow-lg text-center">
                    <img src={image} alt="Random Book Cover" className="w-40 h-auto mx-auto mb-4" />
                    <div className="flex justify-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm">{author}</span>
                        <span className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm">Identity</span>
                    </div>
                    <div className="text-2xl font-bold mb-2">{bookName}</div>
                    <div className="text-gray-600 mb-2">By: {author}</div>
                    <div className="text-gray-500 mb-2">Fiction</div>
                    <div className="text-yellow-500 text-xl">5.00 ★</div>
                </div>
           
        </div>
    );
};

export default Book;