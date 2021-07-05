const add = (n1: number, n2: number, cb: (num: number) => void) => {
  const res = +n1 + +n2;
  cb(res);
  return res;
};

const printRes = (num: number) => {
  console.log(num);
};

// defining function as a type
// let clg: Function;
// let clg:() => {}
// +=+ strongly typed +=+
let clg: (num: number) => void;

// NOT POSSIBLE
// clg =add
clg = printRes;

add(1, 2, (res) => console.log(res));
