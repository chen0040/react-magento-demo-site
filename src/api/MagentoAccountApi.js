import axios from 'axios';
import MagentoHttpAdapter from './MagentoHttpAdapter';

class MagentoAccountApi {
  static loginAsClient(siteUrl, username, password) {
      
    return axios({
        adapter: MagentoHttpAdapter,
        method: 'post',
        url: siteUrl + MagentoAccountApi.Path4LoginAsClient, 
        data: {
            username: username,
            password: password
        },
        withCredentials: true,
    });
  }
}

MagentoAccountApi.Path4LoginAsClient = "/rest/V1/integration/customer/token";
MagentoAccountApi.Path4LoginAsAdmin = "/rest/V1/integration/admin/token";

export default MagentoAccountApi;
