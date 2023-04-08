export interface DetailData {
  '*profilePicture': string;
}
export interface DetailDataUnion {
  profilePicture: string;
}
export interface Attribute {
  detailData: DetailData;
  detailDataUnion: DetailDataUnion;
  $recipeTypes: string[];
  $type: string;
}
export interface HeaderImage {
  attributes: Attribute[];
  actionTarget: string;
  accessibilityTextAttributes: any[];
  accessibilityText: string;
  $recipeTypes: string[];
  $type: string;
}
export interface DetailDataUnion2 {
  profileFullName: string;
  style: string;
  hyperlink: string;
}
export interface DetailData2 {
  '*profileFullName': string;
}
export interface AttributesV2 {
  detailDataUnion: DetailDataUnion2;
  start: number;
  length: number;
  detailData: DetailData2;
  $recipeTypes: string[];
  $type: string;
}
export interface Headline {
  textDirection: string;
  text: string;
  attributesV2: AttributesV2[];
  accessibilityTextAttributesV2: any[];
  accessibilityText: string;
  $recipeTypes: string[];
  $type: string;
}
export interface CardAction {
  reloadCard: boolean;
  actionTarget: string;
  type: string;
  $recipeTypes: string[];
  primary: boolean;
  $type: string;
}
export interface Description {
  textDirection: string;
  text: string;
  attributesV2: any[];
  $recipeTypes: string[];
  $type: string;
}
export interface Title {
  textDirection: string;
  text: string;
  attributesV2: any[];
  $recipeTypes: string[];
  $type: string;
}
export interface SuccessToastText {
  textDirection: string;
  text: string;
  $recipeTypes: string[];
  $type: string;
}
export interface SettingOption {
  optionType: string;
  description: Description;
  title: Title;
  $recipeTypes: string[];
  $type: string;
  followingStateUrn: string;
  successToastText: SuccessToastText;
  '*followingState': string;
  notificationTypeUrn: string;
  '*notificationSetting': string;
  notificationSettingUrn: string;
}
export interface DisplayText {
  textDirection: string;
  text: string;
  attributesV2: any[];
  accessibilityTextAttributesV2: any[];
  accessibilityText: string;
  $recipeTypes: string[];
  $type: string;
}
export interface Action {
  displayText: DisplayText;
  reloadCard: boolean;
  actionTarget: string;
  type: string;
  $recipeTypes: string[];
  primary: boolean;
  $type: string;
}
