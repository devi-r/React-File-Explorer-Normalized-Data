import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import FileExplorerTree from "./components/FileExplorerTree";
import { initialItems } from "./data/items";
import "./styles.css";

export default function App() {
  const items = initialItems;
  const [activeItem, setActiveItem] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState(new Set());
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleToggleExpand = (folderId) => {
    setExpandedFolders((currentExpanded) => {
      const newExpanded = new Set(currentExpanded);
      if (newExpanded.has(folderId)) {
        newExpanded.delete(folderId);
      } else {
        newExpanded.add(folderId);
      }
      return newExpanded;
    });
  };

  const handleItemInteraction = (itemId) => {
    // For breadcrumb navigation to 'Home', which sends null
    if (itemId === null) {
      setActiveItem(null);
      setSelectedItems(new Set());
      return;
    }

    const item = items[itemId];
    if (!item) return;

    setSelectedItems(new Set([itemId]));

    if (item.type === "folder") {
      setActiveItem(itemId);
      // auto-open folder in tree when selected/navigated to
      if (!expandedFolders.has(itemId)) {
        handleToggleExpand(itemId);
      }
    } else {
      // It's a file, so navigate to its parent folder
      setActiveItem(item.parentId || "root");
    }
  };

  return (
    <div className="app-container">
      <FileExplorerTree
        items={items}
        expandedFolders={expandedFolders}
        onToggleExpand={handleToggleExpand}
        selectedItems={selectedItems}
        onSelectItem={handleItemInteraction}
      />
      <div className="main-content">
        <FileExplorer
          items={items}
          activeItem={activeItem}
          onNavigate={handleItemInteraction}
          selectedItems={selectedItems}
        />
      </div>
    </div>
  );
}
