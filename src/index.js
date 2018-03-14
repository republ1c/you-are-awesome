// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName };

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        set: function (value) { propertyName = value },
        get: function () { return propertyName },
    })
    return propertyName;
};

 const createProtoMagicObject  = function () {

  var magicObj = createProtoMagicObject;
  magicObj.__proto__ = magicObj.prototype;
  return magicObj;
}

var inc = function () {
  var incrementor = function () {
    incrementor.currentCount++;
    return incrementor;
  };
  incrementor.valueOf = function () { return incrementor.currentCount;}
  incrementor.currentCount = 0;

  return incrementor;
}
const incrementor = inc();

let asynccount = 1;
const asyncIncrementor = () => {
  return asynccount++;
}


const createIncrementer = () => {}
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;