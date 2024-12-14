/* eslint-disable no-unused-vars */
export enum ENUM_REF_TYPE {
  Location = "Location",
  RealEstate = "RealEstate",
  News = "News",
}

export enum ENUM_SOCIAL_TYPE {
  Google = "google",
  Github = "github",
}

export enum ENUM_GENDER {
  Male = "Male",
  Female = "Female",
  Unknown = "Unknown",
}

export const MAPPING_GENDER = {
  [ENUM_GENDER.Female]: "Nữ",
  [ENUM_GENDER.Male]: "Nam",
  [ENUM_GENDER.Unknown]: "Không biết",
} as const;

export enum ENUM_ROLE {
  Admin = "Admin",
  Staff = "Staff",
  User = "User",
}

export enum ENUM_LOCATION_TYPE {
  PROVINCE = 1,
  DISTRICT = 2,
  WARD = 3,
  STREET = 4,
}

export enum ENUM_MARKER_SYMBOL {
  APARTMENT = "apartment",
  COMPANY = "company",
  DEFAULT = "default",
  DRINK = "drink",
  FACTORY = "factory",
  FOOD = "food",
  GARA = "gara",
  HOSPITAL = "hospital",
  HOTEL = "hotel",
  MARKET = "market",
  PARK = "park",
  REAL_ESTATE = "real-estate",
  SALON = "salon",
  SCHOOL = "school",
  SHOP = "shop",
  TEMPLE = "temple",
  THEATER = "theater",
}

export enum ENUM_MAP_MODE {
  Edit = 'edit',
  View = 'view',
}