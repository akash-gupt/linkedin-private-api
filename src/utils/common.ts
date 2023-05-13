import { HeaderImage } from '../entities';
import { encode } from './encoder';

export const transformHeaderImageToProfileId = (headerImage: HeaderImage): string => {
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

export const zipJson = (body: Record<string, any>) => {
  const encoder = new TextEncoder();
  return encode(encoder.encode(JSON.stringify(body))) as any;
};
