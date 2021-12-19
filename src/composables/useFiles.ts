import { reactive } from 'vue';
import { FilesStateI } from './types/useFiles.types';

const state: FilesStateI = reactive({
  files: []
});

export default function useFiles() {
  const getFiles = () => state.files;

  // FIXME
  const setFiles = (files: any) => {
    state.files = files;
  };
  const resetFiles = () => (state.files = []);

  return {
    setFiles,
    resetFiles,
    getFiles
  };
}
