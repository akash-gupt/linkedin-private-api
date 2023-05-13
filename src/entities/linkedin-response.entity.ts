export interface LinkedInResponse<T, I = undefined> {
  data: T;
  included: I[];
}
