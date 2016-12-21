import { send } from '../main/SendMsgToMainWindow';

export const editMenuTemplate = {
  label: 'Edit',
  submenu: [
    { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:', click: function () { send('undo'); } },
    { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:', click: function () { send('redo'); } },
    { type: 'separator' },
    { label: 'Swap Selected Tiles', accelerator: 'X', click: function () { send('tile-swap', 'X'); } },
    { label: 'Tool: Brush', accelerator: 'B', click: function () { send('tool-brush', 'B'); } },
    { label: 'Tool: Eyedropper', accelerator: 'I', click: function () { send('tool-eyedropper', 'I'); } },
    { label: 'Tool: Move', accelerator: 'V', click: function () { send('tool-move', 'V'); } },
    { label: 'Tool: Marquee Select', accelerator: 'M', click: function () { send('tool-select', 'M'); } },
    { label: 'Tool: Flood Fill', accelerator: 'G', click: function () { send('tool-flood-fill', 'G'); } },
    { type: 'separator' },
    { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:', click: function () { send('edit-cut'); } },
    { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:', click: function () { send('edit-copy'); } },
    { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:', click: function () { send('edit-paste'); } },
    { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:',
      click: function () { send('edit-select-all'); } }
  ]
};
