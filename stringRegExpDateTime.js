// 1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings 
//ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
function task1() {
    let str = "ahb acb aeb aeeb adcb axeb";

    let result = str.match(/a[^]b/g);

    console.log(result[0]); // ahb
    console.log(result[1]); // acb
    console.log(result[2]); // aeb

    console.log(result.length); // 3
}

task1();

//2.Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
function task2() {
    let str = '2 + 3 223 2223';
    let regexp = /2 \+ 3/ig;

    let result = regexp.exec(str);
    
    console.log(result[0]);
}

task2();

//3.Get the day, month and year of the current date and output it to the console separately

function task3() {
    let currentDate = new Date();
    
    console.log(getLocalDay(currentDate));
    console.log(getLocalMonth(currentDate));
    console.log(currentDate.getFullYear());
}

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }

  function getLocalMonth(date) {
    return date.getMonth() + 1;
  }

task3();