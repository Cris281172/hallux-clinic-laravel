const EditorRenderer = ({ blocks }) => {
    if (!blocks || !Array.isArray(blocks)) return null;

    return (
        <div className="editor-content">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case 'header':
                        const HeaderTag = `h${block.data.level}`;
                        return <HeaderTag key={index}>{block.data.text}</HeaderTag>;

                    case 'paragraph':
                        return <p key={index} dangerouslySetInnerHTML={{ __html: block.data.text }}></p>;

                    case 'list':
                        const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
                        return (
                            <ListTag key={index}>
                                {block.data.items.map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item.content ? item.content : item }}></li>
                                ))}
                            </ListTag>
                        );

                    case 'quote':
                        return <blockquote key={index} dangerouslySetInnerHTML={{ __html: block.data.text }}></blockquote>;

                    case 'code':
                        return (
                            <pre key={index}>
                                <code>{block.data.code}</code>
                            </pre>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default EditorRenderer;
