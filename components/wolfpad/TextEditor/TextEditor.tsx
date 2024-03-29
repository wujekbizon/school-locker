import exampleTheme from './Themes';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { TRANSFORMERS } from '@lexical/markdown';
import prepopulatedText from './SampleText';
import { testText } from './SampleText';
import MyCustomAutoFocusPlugin from './Plugins/MyCustomAutoFocusPlugin';
import ToolbarPlugin from './Plugins/ToolbarPlugin';
import CodeHighlightPlugin from './Plugins/CodeHighlightPlugin';
import ActionsPlugin from './Plugins/ActionPlugin';
import Placeholder from './Placeholder';
import { Cell } from '../../../store/cell';

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const onError = (error: Error) => {
    console.error(error.message);
    throw error;
  };

  const initialConfig = {
    namespace: 'Wolfpad_Editor',
    editorState: testText,
    theme: exampleTheme,
    onError,
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-scroller">
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <MyCustomAutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <CodeHighlightPlugin />
            <ActionsPlugin />
          </div>
        </div>
      </div>
    </LexicalComposer>
  );
};
export default TextEditor;
