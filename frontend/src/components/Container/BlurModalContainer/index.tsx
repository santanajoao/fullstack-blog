'use client';

import { ChildrenProps } from '@/types/ChildrenProps';
import React, {
  ComponentProps, useCallback, useEffect, useRef,
} from 'react';

interface Props extends ChildrenProps {
  onBlur: () => any;
  className?: ComponentProps<'div'>['className'];
  isActive?: boolean;
}

export default function BlurModalContainer({
  children, onBlur, className, isActive = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const verifyBlur = useCallback((event: MouseEvent) => {
    if (!isActive || !containerRef.current) return;

    const containerEl = containerRef.current as Node;
    const clickedEl = event.target as Node;
    const clickedOut = containerEl !== clickedEl && !containerEl.contains(clickedEl);
    if (clickedOut) {
      onBlur();
    }
  }, [onBlur, isActive]);

  useEffect(() => {
    document.addEventListener('click', verifyBlur);
  }, [containerRef, verifyBlur]);

  return (
    <div ref={containerRef} className={className}>{children}</div>
  );
}
