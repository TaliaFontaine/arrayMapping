var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(num) {
    var xsquared = num.x * num.x;
    var ysquared = num.y * num.y;
    var zsquared = xsquared + ysquared;
    var zSroot = zsquared ** 0.5;
    return zSroot;
    // return num;
    }
);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);