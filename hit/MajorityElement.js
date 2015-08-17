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
        } else
            nums[i] === h?c++:c--;
    }
    return h;
};

var majorityElement_1 = function(nums) {
    var length = nums.length,
        half = Math.ceil(length/2),
        count,
        rdx,
        i;
    while(true) {
        rdx = nums[Math.floor(Math.random()*length)];
        count = 0;
        for(i=0; i < length; i++) {
            if(nums[i] === rdx) {
                count++;
                if(count > half) {
                    return rdx;
                }
            }
        }
    }
}

// TEST
// helper
function genRandomData(length, equalLength, d) {
    var i, data = [],tmp=[];
    length = length||23;
    for(i=0; i < length; i++) {
        tmp[i] = i;
        data.push(Math.round(Math.random()*100));
    }
    if(equalLength == null||sameLength < length/2) {
        equalLength = Math.ceil((Math.random()+ 1)*length/2);
    }
    if(d == null) {
        d = Math.round(Math.random()*100);
    }
    for(i=0;i < equalLength;i++) {
        t = Math.round(Math.random()*tmp.length);
        t = tmp.splice(t,1);
        data[t] = d;
    }
    //console.log('L:',length,' EL:',equalLength,' D:',d);
    //print(data);
    return {
        array:data,
        l: equalLength,
        d: d
    }
}

function print(d) {
    var tmpStr = d.join(' ');
    console.log(tmpStr);
}
function getNano() {
    var t = process.hrtime();
    return t[0]*1e9 + t[1];
}
var data,start,duration, summary=[0,0,0,0],counts = 399;
for(var i=0;i<counts;i++) {
    data = genRandomData(99999);
    //console.log(data.array.join(' '));
    duration = [];
    start = getNano(); 
    duration[2] = majorityElement(data.array);
    duration[0] = getNano()-start;
    start = getNano();
    duration[3] = majorityElement_1(data.array);
    duration[1] = (getNano() - start);
    if(duration[0] < duration[1]) {
        duration[4] = 'L';
        summary[0]++;
    } else {
        duration[4] = 'R';
        summary[1] ++;
    }
    summary[2] += duration[0];
    summary[3] += duration[1];
    //console.log(duration.join('-'));
    console.log(i+1+'/'+counts);
}
console.log('L:',summary[0],' R:', summary[1]);
console.log('SL:',summary[2],' SR:', summary[3]);
console.log(summary[2]>summary[3]?'R':'L');
