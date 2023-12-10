'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('d8e653be-03f9-40c9-afee-d1d0c238f4e7');
  }, []);

  return null;
};
