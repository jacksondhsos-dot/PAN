export type Language = 'en' | 'mr';

export type MenuCategory = 'all' | 'meetha' | 'sada' | 'chocolate' | 'special' | 'calcutta';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameMr: string;
  category: MenuCategory;
  descriptionEn: string;
  descriptionMr: string;
  estimatedPrice: number;
  priceNote: string;
  priceNoteMr: string;
  isSamplePrice: boolean;
  isAvailable: boolean;
  image: string;
  tagsEn: string[];
  tagsMr: string[];
  ingredientsEn: string[];
  ingredientsMr: string[];
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  source: 'Google' | 'Direct Customer';
}

export interface ShopInfo {
  nameEn: string;
  nameMr: string;
  taglineEn: string;
  taglineMr: string;
  phonePrimary: string;
  phoneSecondary: string;
  addressFull: string;
  addressShort: string;
  addressMr: string;
  landmark: string;
  landmarkMr: string;
  plusCode: string;
  city: string;
  state: string;
  pincode: string;
  mapsUrl: string;
  whatsappPrimary: string;
}
