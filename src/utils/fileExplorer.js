// Get children of a folder
export const getChildren = (items, parentId) => {
  return Object.values(items).filter((item) => item.parentId === parentId);
};

// Get path to an item (recursive)
export const getItemPath = (items, itemId) => {
  const basePath = { name: "Home", id: null };

  if (!itemId || itemId === "root") {
    return [basePath];
  }

  const buildPath = (id) => {
    const item = items[id];
    if (!item) {
      // If the item doesn't exist, return an empty path.
      return [];
    }

    if (!item.parentId) {
      // If it's a root-level item, return just this item.
      return [{ name: item.name, id: item.id }];
    }

    return [...buildPath(item.parentId), { name: item.name, id: item.id }];
  };

  return [basePath, ...buildPath(itemId)];
};
