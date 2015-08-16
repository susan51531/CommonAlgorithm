/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var i,j,h,c=0;    
    for(i=0,j=nums.length; i < j; i++) {
        if(c === 0) {
            h = nums[i];
            c = 1;
            continue;
        }
        if(nums[i] === h) {
            c++;
        } else {
            c--;
        }
    }
    return h;
};

// TEST
// helper
function genRandomData(length, sameLength, d) {
    var i, data = [],tmp=[];
    length = length||23;
    for(i=0; i < length; i++) {
        tmp[i] = i;
        data.push(Math.round(Math.random()*100));
    }
    if(sameLength == null||sameLength < length/2) {
        sameLength = Math.ceil((Math.random()+ 1)*length/2);
    }
    if(d == null) {
        d = Math.round(Math.random()*100);
    }
    for(i=0;i < sameLength;i++) {
        t = Math.round(Math.random()*tmp.length);
        t = tmp.splice(t,1);
        data[t] = d;
    }
    //console.log('L:',length,' SL:',sameLength,' D:',d);
    //print(data);
    return {
        array:data,
        l: sameLength,
        d: d
    }
}

function print(d) {
    var tmpStr = d.join(' ');
    console.log(tmpStr);
}

var data;
for(var i=0;i<10;i++) {
    data = genRandomData(25);
    console.log('L:', data.l,' R:',data.d,' A:', majorityElement(data.array));
}
