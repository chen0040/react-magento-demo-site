import axios from 'axios';
import MagentoHttpClient from './MagentoHttpClient';

class MagentoCategoryApi {
    static loadRootCategory(siteUrl, token){
        return MagentoHttpClient.getSecure(siteUrl + MagentoCategoryApi.Path4Categories, token);
    }
}

MagentoCategoryApi.Path4Categories = "/rest/V1/categories";

export default MagentoCategoryApi;