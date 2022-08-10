import '../css/style.css'
import { callGoldConverter } from './gold-converter';

const source = document.getElementById("source");
const source_unit = document.getElementById("source_unit");
const target = document.getElementById("target");
const target_unit = document.getElementById("target_unit");


source.addEventListener(
  "keyup",
  (evt) => {
    callGoldConverter(source.value, source_unit.value, target, target_unit.value);
  },
  false
);

source_unit.addEventListener(
  "change",
  (evt) => {
    callGoldConverter(source.value, source_unit.value, target, target_unit.value);
  },
  false
);

target_unit.addEventListener(
  "change",
  (evt) => {
    callGoldConverter(source.value, source_unit.value, target, target_unit.value);
  },
  false
);