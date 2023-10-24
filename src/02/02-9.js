// function parse(qs) {
//   var queryString = qs.substr(1);
//   var chunks = qs.split('&');
//   var result = {};
//   for(var i = 0; i < chunks.length; i++){
//     var parts = chunks[i].split('=');
//     var key = parts[0];
//     var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
//     result[key] = value;
//   }
//   return result;
// }

// function parse(qs){
//   const queryString = qs.substr(1);
//   const chunks = queryString.split('&');
//   let result = {};
//   chunks.forEach((chunks) =>{
//     const [ key, value ] = chunks.split('=');
//     result[key] = value;
//   });
// }

// function parse(qs){
//   const queryString = qs.substr(1);
//   const chunks = queryString.split('&');
//   const result = chunks.map((chunk) =>{
//     const [ key, value ] = chunk.split('=');
//     result[key] = value;
//   });
//   return result;
// }

function parse(qs){
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .map((chunk) => {
      const [ key, value ] = chunk.split('=');
      return {key, value};
  })
  .reduce((result, item) => {
    result[item.key] = item.value;
    return result;
  }, {});
}