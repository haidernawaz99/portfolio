import { useState } from 'react';
import type { PageId } from '@/types';

interface UseActivePageReturn {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

export function useActivePage(initialPage: PageId = 'home'): UseActivePageReturn {
  const [activePage, setActivePage] = useState<PageId>(initialPage);

  return { activePage, setActivePage };
}
