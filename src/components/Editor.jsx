import React, { useEffect, useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';

function CodeEditor() {
  const handleEditorMount = (editor, monaco) => {
    monaco.editor.defineTheme('myCustomTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'C586C0' },
        { token: 'string', foreground: '98C379' },
        { token: 'variable', foreground: 'DCDCAA' },
        { token: 'function', foreground: 'F8F8F2' },
        { token: 'operator', foreground: 'F8F8F2' },
        { token: 'number', foreground: 'D19A66' },
      ],
      colors: {
        'editor.background': '#1E1E1E',
        'editor.foreground': '#D4D4D4',
        'editorCursor.foreground': '#FFFFFF',
        'editor.lineHighlightBackground': '#2A2A2A',
        'editor.selectionBackground': '#264F78',
        'editor.inactiveSelectionBackground': '#3A3D41',
      },
    });

    monaco.editor.setTheme('myCustomTheme');
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MonacoEditor
        height="100%"
        language="javascript"
        theme="myCustomTheme"
        value={'// Welcome to Sincronía!'}
        onMount={handleEditorMount}
        options={{
          selectOnLineNumbers: true,
          fontSize: 16, 
        }}
      />
    </div>
  );
}

export default CodeEditor;
