export interface SalesApiIdentity {
  elements: {
    agnosticIdentity: {
      'com.linkedin.sales.authentication.SalesCapIdentity': {
        contractUrn: string;
        seatUrn: string;
      };
    };
    name: string;
    description: string;
  }[];
  paging: {
    count: number;
    start: number;
    links: any[];
  };
}
