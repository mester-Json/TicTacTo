import { useState } from "react";


function Square({ value, onSquareClik }) {
    return (
        <button onClick={onSquareClik}  >
            {value}
        </button>
    );
}

export default Square