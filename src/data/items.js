export const initialItems = {
  root: {
    id: "root",
    name: "Root",
    type: "folder",
    parentId: null,
  },
  folder1: {
    id: "folder1",
    name: "Documents 1",
    type: "folder",
    parentId: "root",
  },
  folder2: {
    id: "folder2",
    name: "Documents 2",
    type: "folder",
    parentId: "root",
  },
  file1: {
    id: "file1",
    name: "file1.pdf",
    type: "file",
    parentId: "folder1",
    metadata: {
      size: 1024,
      lastModified: new Date(),
    },
  },
  file2: {
    id: "file2",
    name: "file2.pdf",
    type: "file",
    parentId: "folder1",
    metadata: {
      size: 1024,
      lastModified: new Date(),
    },
  },
  folder3: {
    id: "folder3",
    name: "Projects",
    type: "folder",
    parentId: "folder1",
  },
  file3: {
    id: "file3",
    name: "file3.pdf",
    type: "file",
    parentId: "folder2",
    metadata: {
      size: 1024,
      lastModified: new Date(),
    },
  },
};
