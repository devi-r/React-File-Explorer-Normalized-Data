import { useMemo } from "react";
import { getChildren, getItemPath } from "../utils/fileExplorer";

export default function FileExplorer({
  items,
  activeItem,
  onNavigate,
  selectedItems,
}) {
  const pathArray = useMemo(
    () => getItemPath(items, activeItem),
    [items, activeItem]
  );

  const childrensToRender = useMemo(
    () => getChildren(items, activeItem),
    [items, activeItem]
  );

  return (
    <>
      <div className="header">
        {pathArray.map(({ name, id }, i) => (
          <span key={id}>
            <span
              className={i !== pathArray.length - 1 ? "breadcrumb" : ""}
              onClick={() => i !== pathArray.length - 1 && onNavigate(id)}
            >
              {name}
            </span>
            {i !== pathArray.length - 1 && <span> &gt; </span>}
          </span>
        ))}
      </div>
      <div className="box-wrapper">
        {childrensToRender.map((e) => (
          <div
            onClick={() => onNavigate(e.id)}
            key={e.id}
            className={`box ${e.type} ${
              selectedItems.has(e.id) ? "selected" : ""
            }`}
          >
            {e.name}
          </div>
        ))}
        {childrensToRender.length === 0 && <p>This folder is empty.</p>}
      </div>
    </>
  );
}
