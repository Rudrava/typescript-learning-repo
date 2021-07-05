enum ResType {
  AS_NUMBER,
  AS_TEXT,
}

type Combinable = number | string;
type ConversionDescriptor = `as-number` | `as-text`;

const combine = (
  inp1: Combinable,
  inp2: Combinable,
  resType: ConversionDescriptor
) => {
  let res: Combinable;
  if (
    (typeof inp1 === "number" && typeof inp2 === "number") ||
    resType === "as-number"
  )
    res = +inp1 + +inp2;
  else res = `${inp1.toString()}  ${inp2.toString()}`;
  return res;
};
const number1 = 1;
const number2 = 1;

const string1 = "Rudrava";
const string2 = "Mukherjee";

const age1 = "12";
const age2 = "13";

const userName = combine(string1, string2, "as-text");
console.log(userName);
const marks = combine(number1, number2, "as-number");
console.log(marks);
const age = combine(age1, age2, "as-text");
console.log(age);
