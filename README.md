# React File Explorer (Normalized Data Structure)

A responsive and interactive file explorer component built with React. This application provides a dual-pane interface with a navigation tree on the left and a content grid on the right, allowing for seamless file and folder browsing.

## Demo

Live Preview: https://react-file-explorer-normalized-data.onrender.com

## Features

- **Dual View Interface**: A synchronized tree view in the sidebar and a grid view for the main content.
- **Folder Navigation**: Navigate through the folder structure by clicking on folders in either view.
- **Item Selection**: Select any file or folder, with visual feedback in both the tree and grid views.
- **Breadcrumb Navigation**: Easily track your location and navigate back to parent directories using the breadcrumb trail.
- **Collapsible Tree**: Expand and collapse folders in the sidebar's tree view to explore the hierarchy.
- **Centralized State Management**: Built with modern React hooks for efficient and predictable state management.

## AI-Assisted Development

This project was developed by **[Devi R](https://www.linkedin.com/in/devi-r-06bb94a7)** in the AI era, exploring the capabilities of pair programming with an AI assistant inside of Cursor. The AI handled tasks from component creation and state management to refactoring and styling.

A key architectural decision, guided by the AI, was to use a **normalized data structure** instead of a nested tree. All file and folder items are stored in a single flat object, with parent-child relationships managed by IDs. This approach offers several advantages over a traditional tree structure:

- **Efficient Lookups**: Finding any item is an `O(1)` operation, making data retrieval fast and simple.
- **Simplified Updates**: Modifying items is straightforward without the need for complex tree traversal.
- **State Management**: The flat structure is highly compatible with state management best practices, making the application more scalable and maintainable.

This showcases a modern development workflow where AI not only writes code but also contributes to key architectural decisions.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm (or yarn)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm start
    ```
