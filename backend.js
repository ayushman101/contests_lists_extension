const request = require('request');
const fs=require('fs');



setInterval(()=>{
request('https://codeforces.com/api/contest.list?gym=false', { json: false }, (err, res, body) => {
  if (err) 
  { 
    return console.log(err); 
  }
  fs.writeFile('text.json',body,(err,res)=> {
    if(err)
    {
        return console.log(err);
    }
    // console.log();
  });
  console.log('success');
//   console.log(body.id);
//   console.log(body.explanation);
});

},1000);