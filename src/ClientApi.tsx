import type {Any, ReturnReason, HTTPResult} from './scripts/DataTypes';

const BASE_API_URL: string | undefined = process.env.REACT_APP_BASE_API_URL;

export default class ClientApi {
    private readonly onError: Any;
    private readonly base_url: string;

    constructor(onError: Any) {
    this.onError = onError;
    this.base_url =  BASE_API_URL + '/api';
  }

 async request(options: Any): Promise<HTTPResult> {
    let response: HTTPResult = await this.requestInternal(options);
    if (response.status === 401 && options.url !== '/tokens') {
      const refreshResponse: HTTPResult = await this.put('/tokens', {
        access_token: localStorage.getItem('elfapp_simple_clock_accessToken'),
      });
      if (refreshResponse.ok) {
        localStorage.setItem('elfapp_simple_clock_accessToken', refreshResponse.body.access_token);
        response = await this.requestInternal(options);
      }
    }
    if (response.status >= 500 && this.onError) {
      this.onError(response);
      }
    return response;
  }


  async requestInternal(options: Any): Promise<HTTPResult> {
    let query: string = new URLSearchParams(options.query || {}).toString();
    if (query !== '') {
      query = '?' + query;
    }

    let response;
    try {
      response = await fetch(this.base_url + options.url + query, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('elfapp_simple_clock_accessToken'),
          ...options.headers,
        },
        credentials: options.url === '/tokens' ? 'include' : 'omit',
        body: options.body ? JSON.stringify(options.body) : null,
      });
    }
    catch (error: Any) {
      response = {
        ok: false,
        status: 500,
        json: async () => { return {
          code: 500,
          message: 'The server is unresponsive',
          description: error.toString(),
        }; }
      };
    }

    return {
      ok: response.ok,
      status: response.status,
      body: response.status !== 204 ? await response.json() : null
    };
  }

  async get(url: string, query?: string, options?: object): Promise<HTTPResult> {
    return this.request({method: 'GET', url, query, ...options});
  }

  async post(url: string, body?: object | null, options?: object): Promise<HTTPResult> {
    return this.request({method: 'POST', url, body, ...options});
  }

  async put(url: string, body?: object | null, options?: object): Promise<HTTPResult> {
    return this.request({method: 'PUT', url, body, ...options});
  }

  async delete(url: string, options?: object): Promise<HTTPResult> {
    return this.request({method: 'DELETE', url, ...options});
  }

  async login(jwt_string: string): Promise<ReturnReason> {
    const response: HTTPResult = await this.post('/tokens', null, {
      headers: {
        Authorization:  'Bearer ' + jwt_string
      }
    });
    if (!response.ok) {
      return response.status === 401 ? 'fail' : 'error';
    }
    localStorage.setItem('elfapp_simple_clock_accessToken', response.body.access_token);
    return 'ok';
  }

  async logout(): Promise<void> {
    await this.delete('/tokens');
    localStorage.removeItem('elfapp_simple_clock_accessToken');

  }

   isAuthenticated(): boolean {
    return localStorage.getItem('elfapp_simple_clock_accessToken') !== null;
  }
}