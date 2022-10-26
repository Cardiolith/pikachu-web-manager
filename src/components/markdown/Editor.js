import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import './Editor.less';

export default function MarkdownEditor({ content, style }) {

    const [value, setValue] = useState(content);

    return (
        <div className="markdown-editor" style={style}>
            <MDEditor height={400}  value={value} onChange={setValue} />
        </div>
    );
};