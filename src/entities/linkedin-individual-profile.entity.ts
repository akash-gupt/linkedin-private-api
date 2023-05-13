import { Country } from '../types/country-code.enum';

export const INDIVIDUAL_PROFILE_TYPE = 'com.linkedin.voyager.identity.profile.Profile';

export interface LinkedIndividualProfile {
  lastName: string;
  student: boolean;
  '*miniProfile': string;
  backgroundImage?: string;
  geoCountryUrn: string;
  maidenName: string;
  geoLocationBackfilled: boolean;
  phoneticLastName: string;
  entityLocale: string;
  entityUrn: string;
  state: string;
  headline: string;
  phoneticFirstName: string;
  summary: string;
  industryName: string;
  supportedLocales: LinkedIndividualProfileLocale[];
  locationName: string;
  address: null;
  geoCountryName: string;
  versionTag: string;
  elt: boolean;
  pictureInfo: string;
  profilePictureOriginalImage?: string;
  industryUrn: string;
  birthDate?: string;
  $type: typeof INDIVIDUAL_PROFILE_TYPE;
  defaultLocale: LinkedIndividualProfileLocale;
  firstName: string;
  profilePicture: string;
  showEducationOnProfileTopCard: boolean;
  geoLocation: LinkedIndividualProfileGeoLocation;
  geoLocationName: string;
  location: LinkedIndividualProfileLocation;
  backgroundPicture?: string;
  backgroundPictureOriginalImage?: string;
}

export interface LinkedIndividualProfileLocale {
  country: string;
  language: string;
  $type: 'com.linkedin.common.Locale';
}

export interface LinkedIndividualProfileGeoLocation {
  geoUrn: string;
  $type: 'com.linkedin.voyager.identity.profile.ProfileGeoLocation';
}

export interface LinkedIndividualProfileLocation {
  basicLocation: LinkedIndividualProfileBasicLocation;
  $type: 'com.linkedin.voyager.identity.profile.ProfileLocation';
}

export interface LinkedIndividualProfileBasicLocation {
  countryCode: Country;
  $type: 'com.linkedin.voyager.common.NormBasicLocation';
}
