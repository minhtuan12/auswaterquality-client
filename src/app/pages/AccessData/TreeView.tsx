import React, { useMemo, useState } from "react";
import { Input, Tree } from "antd";
import type { TreeDataNode } from "antd";
import { DataNode } from "antd/es/tree";

const { Search } = Input;

const getParentKey = (key: string, tree: DataNode[]): string | null => {
  for (const node of tree) {
    if (node.children?.some((child) => child.key === key)) {
      return node.key as string;
    }
    if (node.children) {
      const parent = getParentKey(key, node.children);
      if (parent) return parent;
    }
  }
  return null;
};

type Props = {
  treeData: TreeDataNode[];
};

const TreeView: React.FC<Props> = ({ treeData }) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);

    const keys: string[] = [];
    const loop = (data: DataNode[]) => {
      for (const item of data) {
        if (
          item.title &&
          typeof item.title === "string" &&
          item.title.toLowerCase().includes(value.toLowerCase())
        ) {
          keys.push(getParentKey(item.key as string, treeData)!);
        }
        if (item.children) loop(item.children);
      }
    };
    loop(treeData);
    setExpandedKeys(keys.filter(Boolean));
    setAutoExpandParent(true);
  };

  const renderTreeData = useMemo(() => {
    const highlight = (text: string) => {
      const index = text.toLowerCase().indexOf(searchValue.toLowerCase());
      if (index === -1 || !searchValue) return text;
      const before = text.slice(0, index);
      const match = text.slice(index, index + searchValue.length);
      const after = text.slice(index + searchValue.length);
      return (
        <>
          {before}
          <span style={{ color: "red" }}>{match}</span>
          {after}
        </>
      );
    };

    const loop = (data: DataNode[]): DataNode[] =>
      data.map((item) => ({
        ...item,
        title:
          typeof item.title === "string" ? highlight(item.title) : item.title,
        children: item.children ? loop(item.children) : undefined,
      }));

    return loop(treeData);
  }, [searchValue, treeData]);

  return (
    <div>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={onSearchChange}
      />
      <div style={{ height: "150px", overflowY: "auto" }}>
        <Tree
          checkable
          treeData={renderTreeData}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onExpand={onExpand}
        />
      </div>
    </div>
  );
};

export default TreeView;
