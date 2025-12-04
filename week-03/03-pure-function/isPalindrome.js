//port function add(a, b){
   //eturn a+b;
//


export function isPalindrome(string){
    //need to make all the characters the same 
    const makeSame = string.toLowerCase();
    //need to reverse it and === them 
    const checkReverse = makeSame.split('').reverse().join('');
     return checkReverse ===makeSame;

}