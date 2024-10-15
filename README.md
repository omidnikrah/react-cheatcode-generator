<center>
<h1>React CheatCode Generator</h1>
<b>Unlock custom cheat codes in your React apps 🕹</b>
</center>

`react-cheatcode-generator` is a simple and customizable library that allows you to implement cheat codes or key sequences in your React applications. Whether you’re creating fun easter eggs, secret shortcuts, or advanced user interactions, this library makes adding cheat codes effortless.

## Features

- 🕹️ **Customizable Cheat Codes** – Define your own key sequences and associate them with actions.
- 🎮 **Multiple Sequences** – Support for multiple cheat codes in a single app.
- ⚡ **Simple Integration** – Easy to integrate with any React component.
- 🚀 **Lightweight** – Minimal footprint with no unnecessary dependencies.
- 🔒 **Fully Typed** – TypeScript support out of the box.

## Installation

Install via npm or yarn:

```bash
npm install react-cheatcode-generator
# or
yarn add react-cheatcode-generator
```

## Usage

Here’s a quick example to get you started:

```tsx
import React from 'react';
import CheatCode from 'react-cheatcode-generator';

const cheatCode = ['up', 'down', 'left', 'right'];

const App = () => {
  const handleSuccess = () => {
    alert('Cheat code activated! 🚀');
  };

  const handleFail = () => {
    alert('Cheat code failed! ❌');
  };

  return (
    <div>
      <h1>Use the arrow keys to enter the cheat code</h1>
      <CheatCode
        cheatCode={cheatCode}
        onSuccess={handleSuccess}
        onFail={handleFail}
      />
    </div>
  );
};

export default App;
```

### Options

`CheatCode` component accepts the following props:

- `cheatCode`: An array of directions (e.g., `['up', 'down']`) representing the cheat code sequence.
- `onSuccess`: Function triggered when the cheat code is entered correctly.
- `onFail`: Optional function triggered when the cheat code fails.

### Example with Timeout

To add a timeout between inputs:

```tsx
import React from 'react';
import CheatCode from 'react-cheatcode-generator';

const cheatCode = ['up', 'down', 'left', 'right'];

const App = () => {
  const handleSuccess = () => {
    alert('Cheat code activated! 🚀');
  };

  const handleFail = () => {
    alert('Cheat code failed! ❌');
  };

  return (
    <div>
      <h1>Use the arrow keys to enter the cheat code</h1>
      <CheatCode
        cheatCode={cheatCode}
        onSuccess={handleSuccess}
        onFail={handleFail}
        timeoutDuration={1000} // 1 second timeout between inputs
      />
    </div>
  );
};

export default App;
```

## API

### `CheatCode`

Props:
- `cheatCode`: An array of strings representing the cheat code sequence (`'up' | 'down' | 'left' | 'right'`).
- `onSuccess`: Function called when the cheat code is entered correctly.
- `onFail`: Optional function called when the cheat code fails.
- `timeoutDuration`: Optional timeout between key inputs (default is 500ms).
- `className`: Optional custom CSS class for additional styling.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -m "feat: add new feature"`).
4. Push your branch (`git push origin feature/my-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
