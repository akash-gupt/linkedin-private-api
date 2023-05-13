import { LinkedIndividualProfile } from './linkedin-individual-profile.entity';
import { LinkedInMiniProfile } from './linkedin-mini-profile.entity';

export interface IndividualProfile extends LinkedIndividualProfile {
  miniProfile?: LinkedInMiniProfile;
}
