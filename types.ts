import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  name: string;
  price: string;
  credits: string;
  features: string[];
  isPopular?: boolean;
  color?: string;
}

export enum IntentType {
  INFORMATIONAL = 'Bilgi',
  NAVIGATIONAL = 'Gezinme',
  COMMERCIAL = 'Ticari',
  TRANSACTIONAL = 'İşlem',
}

export interface KeywordIdea {
  keyword: string;
  difficulty: string;
  volume: string;
  intent: IntentType;
}