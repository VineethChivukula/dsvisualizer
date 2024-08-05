# Data Structure Visualizer

This project is a web application for visualizing various data structures in Java. It allows users to switch between light and dark themes and provides a user-friendly interface for interacting with different data structures.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Themes](#themes)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vineethchivukula/dsvisualizer.git
   cd dsvisualizer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can use the following features:

- **Toggle Theme**: Use the button in the `Navbar` to switch between light and dark themes.
- **Select Data Structure**: Use the `Sidebar` to select different data structures to visualize.
- **Interact with Data Structures**: Use the `DataStructureVisualizer` component to interact with the selected data structure.

## Components

### App

The main component of the application. It manages the theme and the selected data structure.

### Navbar

A navigation bar that includes a button to toggle between light and dark themes.

### Sidebar

A sidebar that allows users to select different data structures to visualize.

### DataStructureVisualizer

A component that renders the visualization of the selected data structure.

## Themes

The application supports both light and dark themes. The themes are defined using Material-UI's `createTheme` function.

### Light Theme

```javascript
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f3f4f6",
      paper: "",
    },
    text: {
      primary: "#1976d2",
      secondary: "#4d4d4d",
    },
  },
});
```

### Dark Theme

```javascript
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#23272f",
      paper: "",
    },
    text: {
      primary: "#61dafb",
      secondary: "#ffffff",
    },
    primary: {
      main: "#61dafb",
    },
  },
});
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
