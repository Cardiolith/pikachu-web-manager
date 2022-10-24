import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import './Editor.less';

export default function MarkdownEditor(props) {

    const [value, setValue] = useState(props.content);

    return (
        <div className="markdown-editor">
            <MDEditor value={value} onChange={setValue} />
        </div>
    );
};