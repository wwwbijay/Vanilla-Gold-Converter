const gmlal = 0.1166;
const gmtola = 11.6638;
const gmchatak = 58.31;

let toGmConst = 0;
let fromGmConst = 0;

function goldConverter(source, source_unit, target, target_unit) {

  switch(source_unit){

    case 'chatak':
      toGmConst = gmchatak;
      break;

    case 'tola':
      toGmConst = gmtola;
      break;

    case 'lal':
      toGmConst = gmlal;
      break;
    
    default:
      toGmConst = 1;
  }

  switch(target_unit){

    case 'chatak':
      fromGmConst = gmchatak;
      break;

    case 'tola':
      fromGmConst = gmtola;
      break;

    case 'lal':
      fromGmConst = gmlal;
      break;
    
    default:
      fromGmConst = 1;
  }

  let toGram = source * toGmConst;
  let toTarget = toGram/fromGmConst;

  target.value = (toTarget).toFixed(4);




}


function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const callGoldConverter = debounce((source, source_unit, target, target_unit) => {
    return goldConverter(source, source_unit, target, target_unit);
});
