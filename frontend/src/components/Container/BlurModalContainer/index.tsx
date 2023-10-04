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
  const containerEl = useRef<HTMLDivElement>(null);

  const closeOnClickOut = useCallback((event: MouseEvent) => {
    if (!isActive || !containerEl.current) return null;

    const userCardEl = containerEl.current as Node;
    const eventEl = event.target as Node;
    const clickedOut = userCardEl !== eventEl && !userCardEl.contains(eventEl);
    if (clickedOut) {
      onBlur();
    }
    return null;
  }, [onBlur]);

  useEffect(() => {
    document.addEventListener('click', closeOnClickOut);
  }, [closeOnClickOut]);

  return (
    <div ref={containerEl} className={className}>{children}</div>
  );
}
