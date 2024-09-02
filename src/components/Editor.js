// src/components/Editor.js
import React, { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript"; // Change this depending on the language

const Editor = ({ language, value, onChange }) => {
  const editorContainer = useRef(null);
  const editorView = useRef(null);

  useEffect(() => {
    if (editorView.current) {
      editorView.current.dispatch({
        changes: {
          from: 0,
          to: editorView.current.state.doc.length,
          insert: value,
        },
      });
    }
  }, [value]);

  useEffect(() => {
    if (!editorContainer.current) return;

    if (!editorView.current) {
      const startState = EditorState.create({
        doc: value,
        extensions: [
          javascript(), // Replace with the appropriate language extension
          keymap.of([]),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              onChange(update.state.doc.toString());
            }
          }),
        ],
      });

      editorView.current = new EditorView({
        state: startState,
        parent: editorContainer.current,
      });
    }

    return () => {
      if (editorView.current) {
        editorView.current.destroy();
        editorView.current = null;
      }
    };
  }, [editorContainer, onChange]);

  return (
    <div
      ref={editorContainer}
      style={{
        height: "100%",
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
        borderRadius: "4px",
        border: "1px solid #333",
        overflow: "hidden",
      }}
    />
  );
};

export default Editor;
