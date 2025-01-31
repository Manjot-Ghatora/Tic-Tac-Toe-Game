# Tic Tac Toe Game in React

This project is an interactive **Tic Tac Toe** game built using React. It allows two players to play the classic game, customize their names, and dynamically calculates winning probabilities as the game progresses.

## Features

- **Two-Player Gameplay**: Players take turns marking the grid until one wins or the game ends in a draw.
- **Custom Player Names**: Players can personalize their experience by entering their names.
- **Winning Probabilities**: The game calculates and displays each player's winning probabilities in real-time.

## Concepts Practiced

This project reinforces key React concepts, including:

- **State Management**: Handling the game state, player information, and dynamic calculations.
- **Props Usage**: Passing data between components to maintain a clean and organized structure.
- **Conditional Rendering**: Displaying different UI elements based on the game's state.
- **Event Handling**: Managing user interactions such as clicks and form submissions.

## How to Play

1. Open the game in your browser.
2. Enter names for Player 1 and Player 2.
3. Players take turns clicking on the grid to place their marks (Player 1 is "X" and Player 2 is "O").
4. The game announces the winner or declares a draw when applicable.
5. Winning probabilities are displayed and updated throughout the game.

## Project Structure

The project is organized into the following components:

- **App**: The main component that initializes and manages the overall state of the game, as well as rendering child components.
- **GameBoard**: Handles the display of the grid where players interact and tracks the state of the game board.
- **GameOver**: Displays the result of the game, whether a player has won or the game ended in a draw.
- **Log**: Keeps a record of player moves, showing the history of the game.
- **PlayerInfo**: Collects and displays player details, such as their names and current turn information.

## Installation

To run the game locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Manjot-Ghatora/Tic-Tac-Toe-Game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Tic-Tac-Toe-Game
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:5173` to play the game.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as per the license terms.

---

Enjoy playing the game and happy coding!

