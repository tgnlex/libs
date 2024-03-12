import { useState } from 'react';
import MarkdownPreview from './MarkdownPreview'

export default function MarkdownEditor() {
    const {postContent, setPostContent} = useState('_Hello,_ **Markdown**!');
    return (
      <>
        <label>
          Enter some markdown:
          <textaarea
            value=[postContent]
            onChange=(e => setPostContent(e.target.value))
          />
        </label>
        <hr />
        <MarkdownPreview markdoown={postContent} />

    );
}