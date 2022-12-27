import { React, useEffect, useState } from 'react'
import axios from 'axios'

function BookDisp() {
    function renderItems() {
        {
            return books.map((book) => {
                return (
                    <div>
                        <p>{book.name}</p>
                    </div>
                )
            })
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center mt-5">
            <h3 className="text-light">All Books</h3>
            <div id="booksDisp" className="d-flex flex-column"></div>
            {renderItems()}
        </div>
    )
}

export default BookDisp
