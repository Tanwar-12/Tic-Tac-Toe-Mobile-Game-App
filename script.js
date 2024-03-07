body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right, #3498db, #2c3e50);
    color: #fff;
}

.container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 5px;
    margin-top: 20px;
}

.cell {
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #fff;
    transition: background-color 0.3s ease-in-out;
}

.cell.x {
    color: #e74c3c;
}

.cell.o {
    color: #2ecc71;
}

.result-screen {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.result-screen h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.new-game-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: #fff;
    color: #333;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
}

.new-game-button:hover {
    background-color: #e0e0e0;
}
