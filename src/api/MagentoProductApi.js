import MagentoHttpClient from './MagentoHttpClient';

class MagentoProductApi {
     static loadProduct(siteUrl, sku, token){
        return MagentoHttpClient.getSecure(siteUrl + MagentoProductApi.Path4Products + '/' + encodeURIComponent(sku), token);
    }
}

MagentoProductApi.Path4Products = "/rest/V1/products";

export default MagentoProductApi;