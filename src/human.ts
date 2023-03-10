type Age = number;
type Name = string;

type Human = {
  age: Age;
  name: Name;
}

const you = {
  age: 36,
  name: 'you',
  hasFamily: false,
}

// typeof you は Human の部分型のため代入可能
const me: Human = you;

// ただし me.hasFamily にはアクセスできない
console.log(me);
