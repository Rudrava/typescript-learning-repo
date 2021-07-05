const add = (
  n1: number = 64,
  n2: number = 5,
  printResult: boolean,
  resultPhrase: string
): string => {
  const res = n1 + n2;
  if (printResult) {
    console.log(resultPhrase + res);
  } else return resultPhrase + res;
};

let number1 = 1;
let number2 = 1;
const printResult = true;
const resultPhrase = "Result is : ";

const result = add(number1, number2, printResult, resultPhrase);
!printResult && alert(result);
