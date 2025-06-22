import TreeItem from "./TreeItem";

export default function FileExplorerTree({
  items,
  expandedFolders,
  onToggleExpand,
  selectedItems,
  onSelectItem,
}) {
  const rootItems = Object.values(items).filter((i) => i.parentId === null);

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Explorer</h2>
      {rootItems.map((item) => (
        <TreeItem
          key={item.id}
          item={item}
          items={items}
          expandedFolders={expandedFolders}
          onToggleExpand={onToggleExpand}
          selectedItems={selectedItems}
          onSelectItem={onSelectItem}
        />
      ))}
    </div>
  );
}
