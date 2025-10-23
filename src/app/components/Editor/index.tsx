import { useEffect, useState, useRef } from "react";
import { DeleteFilled } from "@ant-design/icons";
import EditorWrapper from "./EditorWrapper";
import { v4 as uuidv4 } from "uuid";

const Editor = ({ ...props }: any) => {
    const { value,
        onChange,
        hasSection } = props;
    const [blocks, setBlocks] = useState<any[]>([]);
    const isFirstRender = useRef(true);

    // --- Khi hasSection = false thì không dùng mảng
    useEffect(() => {
        if (!hasSection) return;
        if (Array.isArray(value) && JSON.stringify(value) !== JSON.stringify(blocks)) {
            setBlocks(value);
        }
    }, [hasSection, JSON.stringify(value)]);

    // --- Đồng bộ block -> form value
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (hasSection) {
            onChange?.(blocks);
        }
    }, [JSON.stringify(blocks)]);

    const addSection = () => {
        setBlocks(prev => [
            ...prev,
            { _id: uuidv4(), title: "Section title", content: "", isSection: true },
        ]);
    };

    const addEditor = () => {
        setBlocks(prev => [
            ...prev,
            { _id: uuidv4(), content: "", isSection: false, title: "" },
        ]);
    };

    const updateBlock = (id: string, newData: any) => {
        setBlocks(prev => prev.map(b => (b._id === id ? { ...b, ...newData } : b)));
    };

    const deleteBlock = (id: string) => {
        setBlocks(prev => prev.filter(b => b._id !== id));
    };

    /** -------------------------
     * Render nếu có nhiều section
     * -------------------------
     */
    if (hasSection) {
        return (
            <div>
                <div style={{ display: "flex", gap: "40px", marginBottom: "12px" }}>
                    <div onClick={addSection} style={{ color: "blue", cursor: "pointer" }}>
                        + Add Section
                    </div>
                    <div onClick={addEditor} style={{ color: "blue", cursor: "pointer" }}>
                        + Add Editor
                    </div>
                </div>

                {blocks.map(block => (
                    <div
                        key={block._id}
                        style={{
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: 20,
                        }}
                    >
                        <EditorWrapper
                            uniqueId={block._id}
                            isSection={block.isSection}
                            title={block.title || ""}
                            content={block.content}
                            onChange={(data: any) => updateBlock(block._id, data)}
                        />
                        <DeleteFilled
                            style={{ color: "red", fontSize: 20, marginTop: 6, cursor: "pointer" }}
                            onClick={() => deleteBlock(block._id)}
                        />
                    </div>
                ))}
            </div>
        );
    }

    /** -------------------------------
     * Render nếu chỉ có 1 editor (string)
     * -------------------------------
     */
    return (
        <EditorWrapper {...props} />
    );
};

export default Editor;
