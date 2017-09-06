import axios from 'axios';
import MagentoHttpAdapter from './MagentoHttpAdapter';

class MagentoHttpClient {
    static getSecure(url, token) {
        if(token) {
            return axios({
                adapter: MagentoHttpAdapter,
                method: 'get',
                headers: {
                    "Authorization": "Bearer " + token,
                },
                url: url,
            });
        } else {
            return axios({
                adapter: MagentoHttpAdapter,
                method: 'get',
                headers: {
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Origin': '*',
                },
                url: url,
            });
        }
    }
}

export default MagentoHttpClient;