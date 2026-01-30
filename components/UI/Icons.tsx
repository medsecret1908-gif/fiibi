import { 
  Banknote, 
  Home, 
  Shield, 
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const Icons = {
  finance: Banknote,
  realEstate: Home,
  insurance: Shield,
  projects: TrendingUp,
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  email: Mail,
  phone: Phone,
  location: MapPin
};

export type IconName = keyof typeof Icons;
