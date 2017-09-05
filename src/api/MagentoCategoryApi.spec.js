import expect from 'expect';
import MagentoCategoryApi from './MagentoCategoryApi';
import MagentoAccountInfo from './MagentoAccountInfo';

describe('Magento Category Api', () => {
   it('can load the root category of the magento site', (done) => {
       MagentoCategoryApi.loadRootCategory(MagentoAccountInfo.url).then(response => {
           console.log(response.data);
           done();
       }).catch(reason => {
           console.log(reason);
           done(new Error(reason));
       })
   }); 
});