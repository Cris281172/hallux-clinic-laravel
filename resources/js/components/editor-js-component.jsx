import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import { useEffect, useRef } from 'react';
const EditorJSComponent = ({ data, onChange, ejInstance }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (!ejInstance.current) {
            const editor = new EditorJS({
                holder: editorRef.current,
                tools: {
                    header: Header,
                    list: List,
                },
                data: data || {},

                onChange: async () => {
                    const content = await editor.saver.save();
                    onChange && onChange(content);
                },
            });

            ejInstance.current = editor;
        }

        return () => {
            if (ejInstance.current) {
                ejInstance.current.destroy();
                ejInstance.current = null;
            }
        };
    }, []);

    return (
        <div className="editor-content">
            <div id="editorjs" ref={editorRef}></div>
        </div>
    );
};

export default EditorJSComponent;
