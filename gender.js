const axios = require('axios')
let url = "http://api.genderize.io"
let names = [];
let params;

//checking if given params are not numbers
names = process.argv.filter((item, index) => {
    if (index > 1) {
        if (isNaN(Number(item))) {
            return item;
        }
        return;
    }
});

// normalize names to an array
names = names.length === 0 ? [] : names.length == 1 ? [names] : names;
// returns an array of strings joined by "&"
params = names.map(name => `name[]=${name}`).join('&');


axios({
    method: 'get',
    url: url += `/?${params}`,
    headers: {
        'Accept': 'application/json'
    },
}).then(res => {
    checkGender(res.data);
}).catch(err => {
    console.log(err)
})

// sorting by gender and probability
const checkGender = (data) => {
    let genders = {
        male: [1, (a, b) => a.probability - b.probability],
        female: [-1, (a, b) => b.probability - a.probability]
    };
    data.sort((a, b) => {
        if (a.gender == b.gender) {
            return genders[a.gender][1](a, b);
        }
        return genders[a.gender][0] - genders[b.gender][0];
    });
    console.log(data);
}

/*
node gender.js tom 55 jack maria anna Alexis

will return in order by highest probability of a name being female:

[ { name: 'anna', gender: 'female', probability: 1, count: 4755 },
  { name: 'maria',
    gender: 'female',
    probability: 0.99,
    count: 8402 },
  { name: 'Alexis', gender: 'male', probability: 0.52, count: 1224 },
  { name: 'Alexis', gender: 'male', probability: 0.52, count: 1224 },
  { name: 'jack', gender: 'male', probability: 0.99, count: 1993 } ]

*/
