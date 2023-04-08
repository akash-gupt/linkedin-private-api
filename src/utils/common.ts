import { HeaderImage } from '../entities';

export const transformHeaderImageToProfileId = (headerImage: HeaderImage): string => {
  const imageAttribute = headerImage.attributes.find(
    attribute => attribute.$type === 'com.linkedin.voyager.dash.common.image.ImageAttribute',
  );

  const profilePicture = imageAttribute?.detailData['*profilePicture'];
  return profilePicture?.replace('urn:li:fsd_profile:', '') ?? '';
};

export const transformToProfileIdentifier = (actionTarget: string): string => decodeURI(actionTarget.replace('/in/', ''));
