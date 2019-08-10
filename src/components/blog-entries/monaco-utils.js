import * as monaco from 'monaco-editor';

const monacoOptions = {
    autoIndent: true,
    automaticLayout: true,
    contextmenu: false,
    lineNumbers: window.orientation !== undefined ? 'off' : 'on',
    minimap: { enabled: false },
    readOnly: true,
    renderLineHighlight: 'none',
    scrollBeyondLastLine: false,
    theme: 'vs',
    wordWrap: 'on'
};

const monacoLineHeight = 19;

export const createMonacoEditor = (domNode, language, value) => {
    const editor = monaco.editor.create(domNode, {
        language,
        ...monacoOptions,
        value
    });
    const editorHeight = editor.getModel().getLineCount() * monacoLineHeight;
    editor.getDomNode().style.height = editorHeight + 'px';
    editor.layout();
};