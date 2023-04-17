import clsx, { ClassValue } from 'clsx';
import { Link as RouteLink } from 'react-router-dom';

export interface LinkProps {
  children: string;
  to: string;
  className?: ClassValue;
}

export function Link({ children, to, className }: LinkProps) {
  return (
    <RouteLink to={to} className={clsx('text-blue-400 transition hover:text-blue-600 hover:underline', className)}>
      {children}
    </RouteLink>
  );
}
