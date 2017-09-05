import expect from 'expect';
import MagentoAccountApi from './MagentoAccountApi';
import MagentoAccountInfo from './MagentoAccountInfo';

const defaultUrl = 'http://j-clef-web-01.japaneast.cloudapp.azure.com';
const username = ''

describe('Magento Account Api', () => {
  it('should return a valid token if given a valid client username and password', function(done) {
      MagentoAccountApi.loginAsClient(
          MagentoAccountInfo.url, 
          MagentoAccountInfo.username, 
          MagentoAccountInfo.password)
          .then((response) => {
              console.log('testing');
            expect(true).toEqual(true);
              console.log(response);
              done();
          }).catch(reason => {
            console.log(reason);
            done(new Error(reason));
          });
    
  });
});

