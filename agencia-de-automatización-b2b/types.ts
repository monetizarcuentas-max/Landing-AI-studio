
export interface ServiceOption {
  id: string;
  label: string;
}

export interface PricingPlan {
  title: string;
  step: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}
