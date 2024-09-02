import { LucideProps } from 'lucide-react';

export type IconComponentProps = Record<
  string,
  React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
>;
