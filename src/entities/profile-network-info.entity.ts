export interface ProfileNetworkInfo {
  distance: Distance;
  entityUrn: string;
  following: boolean;
  followable: boolean;
  '*followingInfo': string;
  followersCount: number;
  connectionsCount: number;
  $type: 'com.linkedin.voyager.identity.profile.ProfileNetworkInfo';
}

export interface Distance {
  value: string;
  $type: 'com.linkedin.voyager.common.MemberDistance';
}

export interface ProfileNetworkInfoIncluded {
  entityUrn: string;
  dashFollowingStateUrn: string;
  following: boolean;
  trackingUrn: string;
  followingType: string;
  followerCount: number;
  followingCount: null;
  $type: 'com.linkedin.voyager.common.FollowingInfo';
}
