import { Quill } from "react-quill";
// import Dropdown from "./Dropdown";
import { ImportOutlined, LineOutlined, RedoOutlined, UndoOutlined, } from "@ant-design/icons";

const BlockEmbed = Quill.import("blots/block/embed");

class DividerBlot extends BlockEmbed {
}

DividerBlot.blotName = "divider";
DividerBlot.tagName = "hr";
Quill.register(DividerBlot);

class FlourishBlot extends BlockEmbed { }
FlourishBlot.blotName = "flourish";
FlourishBlot.tagName = "iframe";
FlourishBlot.className = "ql-flourish";
Quill.register(FlourishBlot);

const Inline = Quill.import("blots/inline");

class EmphBlot extends Inline {
}

EmphBlot.blotName = "em";
EmphBlot.tagName = "em";
EmphBlot.className = "custom-em";
Quill.register("formats/em", EmphBlot);

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
];
Quill.register(Font, true);

// 🆕 Font size whitelist
const fontSizeArr = [
  "8px",
  "9px",
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
];
const Size = Quill.import("attributors/style/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

export const EditorToolbar = ({ uniqueId }: any) => (
  <div id={`toolbar${uniqueId ? "-" + uniqueId : ""}`}>
    <span className="ql-formats">
      <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>

      <select className="ql-size" defaultValue="14px">
        {fontSizeArr.map((size) => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>

      <select className="ql-header" defaultValue="6">
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
        <option value="">Normal</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
      {/* <Dropdown list={colorsList} className="ql-color" /> */}
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">
      <button className="ql-divide">
        <LineOutlined />
      </button>
    </span>
    <span className="ql-formats">
      <button className="ql-undo">
        <UndoOutlined />
      </button>
      <button className="ql-redo">
        <RedoOutlined />
      </button>
    </span>
    <span className="ql-formats">
      <button className="ql-flourish" style={{ display: "flex", gap: '6px', alignItems: 'center' }}>
        Embedded<ImportOutlined />
      </button>
    </span>
  </div>
);

export default EditorToolbar;
