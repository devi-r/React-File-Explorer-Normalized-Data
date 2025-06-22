import { getChildren } from "../utils/fileExplorer";

export default function TreeItem({
  item,
  items,
  expandedFolders,
  onToggleExpand,
  selectedItems,
  onSelectItem,
}) {
  const isFolder = item.type === "folder";
  const isExpanded = expandedFolders.has(item.id);
  const isSelected = selectedItems.has(item.id);

  const children = isFolder ? getChildren(items, item.id) : [];

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent selection when toggling
    onToggleExpand(item.id);
  };

  const handleSelect = () => {
    onSelectItem(item.id);
  };

  return (
    <div>
      <div
        className={`tree-item ${isSelected ? "selected" : ""}`}
        onClick={handleSelect}
      >
        {isFolder && (
          <span className="toggle" onClick={handleToggle}>
            {isExpanded ? "▼" : "►"}
          </span>
        )}
        <span className="icon">{isFolder ? "📁" : "📄"}</span>
        {item.name}
      </div>
      {isExpanded && children.length > 0 && (
        <div className="tree-item-children">
          {children.map((child) => (
            <TreeItem
              key={child.id}
              item={child}
              items={items}
              expandedFolders={expandedFolders}
              onToggleExpand={onToggleExpand}
              selectedItems={selectedItems}
              onSelectItem={onSelectItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
