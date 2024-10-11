# RollTheDice

This project is a simple dice roller web application that allows users to roll a selected number of dice. It displays the numeric values as well as the corresponding dice images. The user can input the number of dice they want to roll, and the dice are rolled when the button is clicked.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [How to Run](#how-to-run)
- [Technologies Used](#technologies-used)
- [File Overview](#file-overview)
- [Future Improvements](#future-improvements)

## Project Structure
The project consists of three main files:
1. `index.html` - The main HTML file that provides the structure of the webpage.
2. `style.css` - The CSS file that styles the HTML content.
3. `dicegame.js` - The JavaScript file that contains the logic for rolling the dice and updating the page dynamically.

## Features
- Users can select the number of dice to roll using a number input field.
- Each dice roll produces a random number between 1 and 6.
- Displays the rolled dice values as text and shows corresponding dice images.
- Responsive design with a gradient background and hover effects on the button.

## How to Run
1. Clone or download the project files.
2. Ensure that you have the dice images (1.png, 2.png, 3.png, etc.) in the `/dim/` folder, and the background image `back.png` also in the `/dim/` folder.
3. Open the `index.html` file in any modern browser to run the application.

## Technologies Used
- **HTML** - To structure the content of the web page.
- **CSS** - To style the webpage and make it visually appealing.
- **JavaScript** - For the dice rolling logic and updating the page dynamically with the results.

## File Overview
### `index.html`
- Provides the structure for the dice roller, including input, buttons, and result display sections.
- Links to external CSS (`style.css`) and JavaScript (`dicegame.js`).

### `style.css`
- Styles the webpage with fonts, button hover effects, a gradient background, and dice image display.
- Ensures a responsive and centered layout.

### `dicegame.js`
- Handles the core functionality of rolling dice.
- Listens for button click events to roll a specified number of dice.
- Generates random numbers between 1 and 6, updates the text content and the dice images.
When you open the application, the app will display something like:
![Dice Example](https://github.com/suhas-m-v/RollTheDice/blob/f8ebd051585be849ef4ea7e40af398aeb73c0d23/Screenshot%202024-10-08%20231125.png)

## Future Improvements
- Add more customization options for the dice (e.g., different color schemes or dice with more sides).
- Implement an animated rolling effect for the dice.
- Allow users to save or share their dice rolls.
