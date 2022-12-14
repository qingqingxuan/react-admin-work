import { AxiosResponse } from "axios";
import request from "./axios.config";

export interface HttpOption {
  url: string;
  data?: any;
  method?: string;
  headers?: any;
  beforeRequest?: () => void;
  afterRequest?: () => void;
}

export interface Response<T = any> {
  totalSize: number | 0;
  code: number;
  msg: string;
  data: T;
}

function http<T>({
  url,
  data,
  method,
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption) {
  const successHandler = (res: AxiosResponse<Response<T>>) => {
    if (res.data.code === 200) {
      return res.data;
    }
    throw new Error(res.data.msg || "请求失败，未知异常");
  };
  const failHandler = (error: Response<Error>) => {
    afterRequest && afterRequest();
    throw new Error(error.msg || "请求失败，未知异常");
  };
  beforeRequest && beforeRequest();
  method = method || "GET";
  const params = Object.assign(
    typeof data === "function" ? data() : data || {},
    {}
  );
  return method === "GET"
    ? request.get(url, { params }).then(successHandler, failHandler)
    : request
        .post(url, params, { headers: headers })
        .then(successHandler, failHandler);
}

export function get<T>({
  url,
  data,
  method = "GET",
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http({
    url,
    method,
    data,
    beforeRequest,
    afterRequest,
  });
}

export function post<T>({
  url,
  data,
  method = "POST",
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http({
    url,
    method,
    data,
    headers,
    beforeRequest,
    afterRequest,
  });
}

export default {
  get,
  post,
};
