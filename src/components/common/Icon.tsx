import { memo } from 'react';

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Icon = memo(function Icon({ src, alt = '', className = 'size-5' }: IconProps) {
  return <img src={src} alt={alt} aria-hidden={alt ? undefined : true} className={className} />;
});
