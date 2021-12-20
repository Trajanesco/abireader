import { reactive } from 'vue';
import { AbiEntry, AbiEntryType, ContractAbi } from '../api/types';

const state: ContractAbi = reactive({
  abiEntries: []
});

export default function useFiles() {
  const getFiles = (): AbiEntry[] => state.abiEntries;

  const setFiles = (files: AbiEntry[]) => {
    state.abiEntries = files;
  };
  const resetFiles = () => (state.abiEntries = []);

  const mapFile = (type: AbiEntryType) => {
    return useFiles()
      .getFiles()
      .filter((entry: AbiEntry) => entry.type === type);
  };

  return {
    setFiles,
    resetFiles,
    getFiles,
    mapFile
  };
}
