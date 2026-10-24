export type Language = 'hi' | 'en';

export type PortalSection = 'home' | 'request' | 'geotag' | 'complaint' | 'nurseries' | 'certificate' | 'careguide';

export interface TreeSpecies {
  id: string;
  nameHi: string;
  nameEn: string;
  scientificName: string;
  category: 'medicinal' | 'shade' | 'fruit' | 'timber';
  descriptionHi: string;
  descriptionEn: string;
  oxygenRating: number; // 1-5
  waterNeedHi: string;
  waterNeedEn: string;
  lifespanYears: number;
  bestSeason: string;
  recommendedPlaces: string;
  image: string;
}

export interface SaplingRequest {
  id: string;
  applicantName: string;
  phone: string;
  email?: string;
  district: string;
  address: string;
  speciesId: string;
  quantity: number;
  purpose: string;
  deliveryType: 'nursery_pickup' | 'home_delivery';
  selectedNursery: string;
  date: string;
  status: 'स्वीकृत' | 'प्रसंस्करण में' | 'वितरण हेतु तैयार' | 'वितरित';
}

export interface GeoTaggedTree {
  id: string;
  treeNumber: string;
  speciesName: string;
  plantedBy: string;
  guardianPhone: string;
  district: string;
  locationName: string;
  latitude: number;
  longitude: number;
  datePlanted: string;
  healthStatus: 'उत्कृष्ट (Healthy)' | 'सामान्य (Moderate)' | 'देखभाल अपेक्षित (Needs Care)';
  wateringFrequency: string;
  hasTreeGuard: boolean;
  notes: string;
  photoUrl?: string;
}

export interface TreeComplaint {
  id: string;
  ticketNumber: string;
  complainantName: string;
  phone: string;
  district: string;
  landmark: string;
  category: 'अवैध पेड़ कटाई' | 'पेड़ गिरने का जोखिम' | 'तार / खंभा अवरोध' | 'सूखा / रोगग्रस्त वृक्ष' | 'आग अथवा क्षति';
  urgency: 'अति-आवश्यक (Critical)' | 'मध्यम (Moderate)' | 'सामान्य (Routine)';
  description: string;
  reportedDate: string;
  status: 'शिकायत दर्ज' | 'निरीक्षण हेतु प्रेषित' | 'कार्य प्रगति पर' | 'निस्तारित';
  assignedOfficer: string;
  officerContact: string;
}

export interface Nursery {
  id: string;
  name: string;
  district: string;
  address: string;
  contactPerson: string;
  phone: string;
  timings: string;
  availableSaplings: number;
  popularSpecies: string[];
}
