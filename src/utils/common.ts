import { LinkedinHeaderImage } from '../entities';

export const transformHeaderImageToProfileId = (headerImage: LinkedinHeaderImage): string => {
  const imageAttribute = headerImage.attributes.find(
    attribute => attribute.$type === 'com.linkedin.voyager.dash.common.image.ImageAttribute',
  );

  const profilePicture = imageAttribute?.detailData['*profilePicture'];
  return profilePicture?.replace('urn:li:fsd_profile:', '') ?? '';
};

export const transformToProfileIdentifier = (actionTarget: string): string => decodeURI(actionTarget.replace('/in/', ''));

export const getIdFromUrn = (urn: string): string => {
  /**
   * Return the ID of a given LinkedIn URN.
   *
   * Example: urn:li:fs_miniProfile:<id>
   */
  return urn.split(':')[3];
};

export const extractProfileId = (profileUrn: string): string => {
  if (profileUrn.includes('(')) {
    const openingBracketIndex = profileUrn.indexOf('(');
    const bracketSegment = profileUrn.substr(openingBracketIndex + 1);
    const profileId = bracketSegment.split(',')[0];
    return profileId;
  } else {
    return profileUrn;
  }
};

export const extractPublicIdentifier = (profileUrl: string): string => {
  if (profileUrl.includes('in/')) {
    const fromIndex = profileUrl.indexOf('in/') + 3;
    const publicIdentifier = profileUrl.substr(fromIndex).replace('/', '');
    return publicIdentifier;
  } else {
    return profileUrl;
  }
};

export const formatText = (text: string) => {
  return text.replace(/\n/g, ' ');
};
