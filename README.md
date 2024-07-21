# OOP-1

This project is a Node.js application that uses object-oriented programming principles to generate an SVG logo based on user input. The application allows users to create logos with different shapes and colors through a command-line interface.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Features

- Prompts user for text, text color, shape type, and shape color.
- Supports three shapes: Circle, Triangle, and Square.
- Generates an SVG file with the specified text and shape.

## Installation

1. *Clone the repository:*

   bash
   git clone <repository-url>
   

2. *Navigate to the project directory:*

   bash
   cd oop-1
   

3. *Install dependencies:*

   bash
   npm install
   

## Usage

To generate a logo, run the following command:

bash
node index.js


You will be prompted to enter:
- Up to three characters for the text.
- A color keyword or hexadecimal number for the text color.
- Choose a shape (Circle, Triangle, or Square).
- A color keyword or hexadecimal number for the shape color.

The application will generate an logo.svg file in the project directory.

## Testing

To run the tests, use the following command:

bash
npm test


The tests ensure that each shape's render method returns the correct SVG string.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
