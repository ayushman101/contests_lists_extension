


fetch('https://codeforces.com/api/contest.list?gym=false').then(function (res) {

  res.json().then(function (data) {

    // console.log(data);

    const arr = [];
    var i = 0;
    while (data.result[i].phase === 'BEFORE') {
      arr.push(data.result[i]);
      i++;
    }

    // console.log(arr);

    // const contestlist=document.getElementById('Contests_list');
    // contestlist.append('Hello World')

    i = arr.length-1;

    while (i>=0) {

      const curdate = new Date();
      const d = new Date((-arr[i].relativeTimeSeconds) * 1000 + curdate.getTime());

      const num=arr[i].durationSeconds / 3600;

      const text=`
        <div class="name">
          <a href="https://codeforces.com/contests"> 
           ${arr[i].name}
          </a>
        </div>
        
        <div class="date">
          ${d.toString()}
        </div>
        <div class="duration">
          ${num.toFixed(2)} hrs
        </div>`;


      const divNode= document.createElement("div")
      


      divNode.className="mydiv";

      divNode.innerHTML=text;

      document.getElementById("Contests_list").appendChild(divNode);
      
      i--;
    }

    console.log('success');
  })


}).catch((err) => {
  console.log(err);
});

