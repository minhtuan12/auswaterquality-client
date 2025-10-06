import ReactQuill from "react-quill";
import EditorToolbar from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useUploadFile } from "../../hooks";
import "./styles.css";

// const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "align",
//   "strike",
//   "script",
//   "blockquote",
//   "background",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "color",
//   "code-block",
//   "em",
//   "p",
//   "divider",
//   "hr",
//   "formats/em",
//   "flourish",
// ];

const Editor = ({ uniqueId = "", ...props }) => {
  const { quillRef, modules } = useUploadFile({ uniqueId });

  return (
    <div className="wjh-admin__news-editor">
      <EditorToolbar uniqueId={uniqueId} />
      <ReactQuill {...props} ref={quillRef} theme="snow" modules={modules} />
    </div>
  );
};

export default Editor;
