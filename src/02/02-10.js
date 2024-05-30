// function work1(onDone) {
//   setTimeout(() => onDone('작업1 완료!'), 100);
// }
// function work2(onDone) {
//   setTimeout(() => onDone('작업2 완료!'), 200);
// }
// function work3(onDone) {
//   setTimeout(() => onDone('작업3 완료!'), 300);
// }
// function urgentWork(){
//   console.log('긴급 작업');
// }
// work1(function (msg1){
//   console.log('done after 100ms:' + msg1);
//   work2(function (msg2){
//     console.log('done after 300ms:' + msg2);
//     work3(function (msg3) {
//       console.log('done after 600ms:' + msg3);
//     });
//   });
// });
// urgentWork();

class Promise{
  constructor(fn){
    const resolve = (...args) => {
      if (typeof this.onDone === 'function'){
        this.onDone(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    }
    const reject = (...args) => {
      if (typeof this.onError === 'function') {
        this.onError(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    }
    fn(resolve, reject);
  }
  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
}