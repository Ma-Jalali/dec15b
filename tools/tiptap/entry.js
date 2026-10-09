// Everything the "My planner" editor needs, bundled into one file: js/vendor/tiptap.bundle.js (window.Tiptap)
export { Editor, Node, Mark, Extension, mergeAttributes } from '@tiptap/core';
export { Plugin, PluginKey } from '@tiptap/pm/state';
export { default as StarterKit } from '@tiptap/starter-kit';
export { default as Underline } from '@tiptap/extension-underline';
export { default as TextStyle } from '@tiptap/extension-text-style';
export { default as Color } from '@tiptap/extension-color';
export { default as Highlight } from '@tiptap/extension-highlight';
export { default as TextAlign } from '@tiptap/extension-text-align';
export { default as TaskList } from '@tiptap/extension-task-list';
export { default as TaskItem } from '@tiptap/extension-task-item';
export { default as Placeholder } from '@tiptap/extension-placeholder';
export { NodeSelection, TextSelection } from '@tiptap/pm/state';
export { default as Table } from '@tiptap/extension-table';
export { default as TableRow } from '@tiptap/extension-table-row';
export { default as TableCell } from '@tiptap/extension-table-cell';
export { default as TableHeader } from '@tiptap/extension-table-header';
export { default as Link } from '@tiptap/extension-link';
// "Write together" (shared writing in a lesson activity): Yjs documents kept in step through Supabase
export { default as Collaboration } from '@tiptap/extension-collaboration';
export { default as CollaborationCursor } from '@tiptap/extension-collaboration-cursor';
export * as Y from 'yjs';
export { Awareness, encodeAwarenessUpdate, applyAwarenessUpdate, removeAwarenessStates } from 'y-protocols/awareness';
export { yXmlFragmentToProsemirrorJSON } from 'y-prosemirror';
