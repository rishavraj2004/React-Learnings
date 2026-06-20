# React Counter App

A simple counter application built with React using the `useState` hook. Users can increase or decrease the counter value with the provided buttons.

## Features

- Increment counter using the `+` button
- Decrement counter using the `-` button
- Prevents the counter from going below `0`
- Built with React functional components and hooks

## Preview

```text
[-] Count 0 [+]
```

## Technologies Used

- React
- JavaScript (ES6+)
- React Hooks (`useState`)

## Project Structure

```text
src/
├── App.js
└── index.js
```

## Code Overview

### State Management

The application uses React's `useState` hook to store the current counter value.

```javascript
const [count, setCount] = useState(0);
```

### Increment Function

Increases the counter value by 1.

```javascript
function handleNext() {
  setCount(count + 1);
}
```

### Decrement Function

Decreases the counter value by 1 only if the current value is greater than 0.

```javascript
function handlePrevious() {
  if (count > 0) setCount(count - 1);
}
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd react-counter-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

or for Create React App:

```bash
npm start
```

## Usage

- Click the **+** button to increase the count.
- Click the **-** button to decrease the count.
- The counter cannot go below zero.

## Example

| Action        | Result  |
| ------------- | ------- |
| Initial State | Count 0 |
| Click `+`     | Count 1 |
| Click `+`     | Count 2 |
| Click `-`     | Count 1 |
| Click `-`     | Count 0 |
| Click `-`     | Count 0 |

## Future Improvements

- Add a reset button
- Add custom increment/decrement values
- Save counter state to local storage
- Add styling and animations

## License

This project is open source and available under the MIT License.
