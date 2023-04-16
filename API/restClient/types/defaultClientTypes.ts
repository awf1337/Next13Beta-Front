export interface RequestResponse {
  status: number;
  error: boolean;
  data?: any;
  message?: string;
}

export interface BasicRequest {
  url: string;
  config?: any;
}

export interface GetType extends BasicRequest {
  params?: any;
}

export interface PostType extends BasicRequest {
  data?: any;
}

export interface PatchType extends BasicRequest {
  data?: any;
}

export interface RequestPayload extends GetType {
  method: string;
  data?: any;
}
