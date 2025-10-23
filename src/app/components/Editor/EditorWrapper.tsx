import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorToolbar from "./EditorToolbar";
import { useUploadFile } from "../../hooks";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

const EditorWrapper = ({ uniqueId = "", ...props }: any) => {
  const { isSection = false, title = "", content = "", onChange } = props;

  const { quillRef, modules } = useUploadFile({ uniqueId });
  const [sectionTitle, setSectionTitle] = useState(title);
  const [editorContent, setEditorContent] = useState(content);

  // Cập nhật khi dữ liệu từ cha thay đổi (ví dụ reset form)
  useEffect(() => {
    setSectionTitle(title);
    setEditorContent(content);
  }, [title, content]);

  const handleChange = (html: string) => {
    setEditorContent(html);
    onChange?.({
      isSection,
      title: sectionTitle,
      content: html,
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setSectionTitle(newTitle);
    onChange?.({
      isSection,
      title: newTitle,
      content: editorContent,
    });
  };

  return (
    <div className="wjh-admin__news-editor" style={{ flex: 1 }}>
      {isSection ? (
        <>
          <input
            type="text"
            value={sectionTitle}
            onChange={handleTitleChange}
            placeholder="Section title..."
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "8px",
              width: "100%",
              border: "none",
              borderBottom: "1px solid #ccc",
              outline: "none",
              padding: "4px 0",
            }}
          />
          <EditorToolbar uniqueId={uniqueId} />
          <ReactQuill
            {...props}
            ref={quillRef}
            theme="snow"
            modules={modules}
            value={editorContent}
            onChange={handleChange}
          />
        </>
      ) : <>
        <EditorToolbar uniqueId={uniqueId} />
        <ReactQuill
          ref={quillRef}
          theme="snow"
          modules={modules}
          value={editorContent}
          onChange={handleChange}
        />
      </>}
    </div>
  );
};

export default EditorWrapper;
