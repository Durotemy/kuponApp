import { NormalizedFile } from './type/types';

export const MAX_IMAGES = 2;

export const validateFile = (file: NormalizedFile) => {
  const MAX_SIZE = 7 * 1024 * 1024;

  if (file?.size! > MAX_SIZE) {
    console.log('file?.sizefile?.size', file?.size);
    return {
      valid: false,
      error: 'File too large (max 5mb)',
    };
  }

  return {
    valid: true,
  };
};
