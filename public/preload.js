// Use isso se precisar expor funções do Node/Electron pro React de forma segura
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Exemplo: appVersion: () => process.versions.electron
});