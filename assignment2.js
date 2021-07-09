//1.in range of 100 if no. is divisible by 3 print fizz , by 5 buzz , by 15 fizzbuzz w/o using modulus

for(i=1;i<=100;i++){
    divisor1=3;
    divisor2=5;
    divisor3=15;
    rem1= i - divisor1 *parseInt(i/ divisor1);
    rem2=  i - divisor2 *parseInt(i/ divisor2);
    rem3=  i - divisor3 *parseInt(i / divisor3);
    if(rem3==0){
        console.log('FizzBuzz');
    }
    if(rem1==0){
        console.log('Fizz');
    }
    else if(rem2==0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}


//2.find the palindrome in the sentence
a="the racecar went off the radar";
const b=a.split(" ");

for(i in b){
  c=b[i];
  const d=c.split("");
  const e=d.reverse();
  const f=e.join("");
  if(b[i]==f){
    console.log(b[i]);
  }
  
}