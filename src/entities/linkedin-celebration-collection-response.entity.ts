interface Paging {
  count: number;
  start: number;
  total: number;
}
export interface LinkedInCelebrationCollectionResponse<T, I, M = undefined> {
  data: {
    data: {
      $recipeTypes: string[];
      $type: 'com.linkedin.restli.common.CollectionResponse';
      propsDashPropsHomeCardsByHome: {
        $recipeTypes: string[];
        $type: 'com.linkedin.restli.common.CollectionResponse';
        elements: T[];
        metadata?: M;
        paging: Paging;
      };
    };
  };
  included: I[];
}
