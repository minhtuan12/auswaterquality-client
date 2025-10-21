import axios from "axios";
import { useCallback, useMemo, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import { BASE_URL } from "../services/api";

const useUploadFile = ({ uniqueId }: any) => {
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = useCallback(() => {
    if (!quillRef.current) {
      return;
    }
    const quill = quillRef.current.getEditor();
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const range = quill.getSelection();
      const rangeIndex = range?.index ?? 0;
      const placeholder = "Uploading...";
      quill.insertText(rangeIndex, placeholder);

      const formData = new FormData();
      formData.append("file", file);

      await axios
        .post(`${BASE_URL}/api/news/upload`, formData)
        .then(({ data }) => {
          quill.deleteText(rangeIndex, placeholder.length);
          quill.insertEmbed(rangeIndex, "image", data.data);
          quill.setSelection((rangeIndex + 1) as any);
        })
        .catch(() => {
          quill.deleteText(rangeIndex, placeholder.length);
          quill.insertText(rangeIndex, "Image upload failed");
        });
    };
  }, []);

  const undoChange = useCallback(() => {
    if (!quillRef.current) {
      return;
    }
    const editor = quillRef.current?.getEditor() as any;
    editor.history.undo();
  }, []);

  const redoChange = useCallback(() => {
    if (!quillRef.current) {
      return;
    }
    const editor = quillRef.current?.getEditor() as any;
    editor.history.redo();
  }, []);

  const addDivider = useCallback(() => {
    if (!quillRef.current) {
      return;
    }
    const editor = quillRef.current?.getEditor();
    const range = editor.getSelection(true);
    editor.insertText(range.index, "\n", (Quill as any).sources.USER);
    editor.insertEmbed(
      range.index + 1,
      "divider",
      true,
      (Quill as any).sources.USER
    );
    editor.setSelection(range.index + 2, (Quill as any).sources.SILENT);
  }, []);

  const insertEmbed = useCallback(() => {
    if (!quillRef.current) {
      return;
    }
    const editor = quillRef.current?.getEditor();
    if (editor) {
      const url = prompt("Enter embed URL:");
      if (url) {
        const range = editor.getSelection(true);
        const rangeIndex = range.index;
        const html = `<iframe src='${url}' frameborder="0"></iframe>`;
        editor.clipboard.dangerouslyPasteHTML(rangeIndex, html);
      }
    }
  }, []);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: `#toolbar${uniqueId ? "-" + uniqueId : ""}`,
        handlers: {
          image: imageHandler,
          undo: undoChange,
          redo: redoChange,
          divide: addDivider,
          flourish: insertEmbed,
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
      clipboard: {
        matchVisual: false,
      },
    };
  }, [uniqueId, imageHandler, undoChange, redoChange, addDivider, insertEmbed]);

  return { quillRef, modules, imageHandler };
};

export default useUploadFile;
