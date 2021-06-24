var temperature = [
    { district: "tvm", temprature: 25 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 32 },
    { district: "pkd", temprature: 31 },

]

// district:highest temperature
// tvm:27,kollam:27,kottayam:28,ekm:29,tsr:32,pkd:31
var weather = {};

for (let data of temperature) {
    let dist = data["district"];
    let temp = data["temprature"];
    if (dist in weather) {
        let old_temp = weather[dist];
        if (old_temp < temp) {
            weather[dist] = temp;
        }
        else {
            weather[dist] = old_temp;
        }
    }
    else{
        weather[dist]=temp;
    }

}
console.log(weather);

// sort descending order by temp
function districtSort(data){
return Object.entries(data).sort((dist1,dist2)=>dist2[1]-dist1[1])
}
console.log(districtSort(weather));



// find district with highest temperature
var highest_temp_dist=temperature.reduce((temp1,temp2)=>temp1.temprature>temp2.temprature?temp1:temp2);
console.log(highest_temp_dist);
