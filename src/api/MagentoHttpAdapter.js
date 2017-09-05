var path=require('path');
var lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
var http=require(lib);

export default http;