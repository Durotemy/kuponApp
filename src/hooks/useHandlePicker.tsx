import { pick } from '@react-native-documents/picker';
import { useCallback } from 'react';
import { NormalizedFile } from '../type/types';

export const useHandlePicker = () => {
  const handlePick = useCallback(async (): Promise<NormalizedFile | null> => {
    const [file] = await pick({
      allowMultiSelection: false,
      mode: 'import',
    });

    if (!file) return null;

    const mimeType = file.type?.toLowerCase();
    const extension = file.name?.split('.').pop()?.toLowerCase();

    const isImage = mimeType?.startsWith('image/') ?? false;
    const isPdf = mimeType === 'application/pdf' || extension === 'pdf';

    const normalized: NormalizedFile = {
      uri: file.uri,
      name: file.name ?? file.uri.split('/').pop() ?? 'file',
      mimeType,
      extension,
      size: file.size,
      kind: isImage ? 'image' : isPdf ? 'pdf' : 'unknown',
    };

    return normalized;
  }, []);

  return { handlePick };
};
