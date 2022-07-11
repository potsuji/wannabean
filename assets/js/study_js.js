
/*----------------------------------------------------
Console
----------------------------------------------------*/

// 5と3を足した値を出力してください
console.log(5 + 3);

console.log(3 * 7);
console.log(6 / 3);

// 8と4をかけた結果を出力してください
console.log(8 * 4);

// 24を4で割った結果を出力してください
console.log(24 / 4);

// 7を2で割った余りを出力してください
console.log(7 % 2);


/*----------------------------------------------------
5. 文字列の連結
----------------------------------------------------*/

// 「ひつじ」と「仙人」を連結してコンソールに出力してください
console.log('ひつじ' + '仙人');

// 文字列の「20」と「15」を連結してコンソールに出力してください
console.log('20' + '15');


/*----------------------------------------------------
変数
----------------------------------------------------*/
// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";

// 変数nameの値を出力してください
console.log ( name );



/*----------------------------------------------------
7. 変数の役割
----------------------------------------------------*/
// 変数lengthを定義してください
let length = 5;

// 変数lengthの値を出力してください
console.log(length);

// 変数lengthを用いて、円の面積を出力してください
console.log(length * length *3);



/*----------------------------------------------------
9. 変数の値の更新（2）
----------------------------------------------------*/

let number = 7;
console.log(number);

// 変数numberの値に3を加えてください

number = number + 3;
console.log(number);

// 変数numberの値を2で割ってください

number /= 2;  // 「number = number/2;」と同じ 
console.log(number);


/*----------------------------------------------------
10. 定数とは
----------------------------------------------------*/
// 定数languageを定義してください
const language = "フランス語";

// 定数languageの値を出力してください
console.log(language);

// 定数languageを用いて、「〇〇を話せます」と出力してください

console.log(language + "を話せます");


/*----------------------------------------------------
11. テンプレートリテラル
----------------------------------------------------*/
const name2 = "にんじゃわんこ";
const age = 14;

// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`ぼくの名前は${name2}です`);

// 「今は〇〇歳です」と出力してください
console.log(`今は${age}です`);


/*----------------------------------------------------
12. if文
----------------------------------------------------*/
const level = 12;

// 条件式を「level > 10」とするif文を作ってください
if(level > 10){
  console.log("レベルが10より大きいです");
}



/*----------------------------------------------------
13. 真偽値と比較演算子（1）
----------------------------------------------------*/
const age1 = 24;

// 「age >= 20」を出力してください
console.log(age1 >= 20);

// 「age < 20」を出力してください
console.log(age1 < 20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if(age1 >= 20){
  console.log("私は20歳以上です");
}


/*----------------------------------------------------
14. 真偽値と比較演算子（2）
----------------------------------------------------*/
const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください

if(password === "ninjawanko"){
  console.log("ログインに成功しました");
}

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください

if(password !== "ninjawanko"){
  console.log("パスワードが間違っています");
}

/*----------------------------------------------------
15. else
----------------------------------------------------*/
const age2 = 17;

// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age2 >= 20) {
  console.log("私は20歳以上です");
} else{
  console.log("私は20歳未満です");
}

/*----------------------------------------------------
17. 複数の条件式
----------------------------------------------------*/
const age3 = 24;

// 指定された条件のif文を作成してください
if(age3 >= 20 && age3 < 30){
  console.log("私は20代です");
}

/*----------------------------------------------------
18. switch文（1）
----------------------------------------------------*/
const n = 3;

switch (n) {
  case 1:
    console.log("大吉です");
    break;

  // nの値が2のcaseを追加してください
    case 2:
    console.log("吉です");
    break;
    
  // nの値が3のcaseを追加してください
      case 3:
      console.log("小吉です");
      break;
    // どのcaseにも合致しなかったときの処理を追加してください
  default:
    console.log("凶です");
    break;
}




/*----------------------------------------------------
1. 変数の復習
----------------------------------------------------*/

// 変数number2を定義してください
let number2 = 0;

// 変数number2に1を加えて、その後に変数number2の値を出力してください
number2 += 1;
console.log(number2);

// 上述の2行のコードを4回、貼り付けてください
number2 += 1;
console.log(number2);
number2 += 1;
console.log(number2);
number2 += 1;
console.log(number2);
number2 += 1;
console.log(number2);

/*----------------------------------------------------
2. while文
----------------------------------------------------*/

// 変数number3を定義してください
let number3 = 1;

// while文を作成してください
while (number3 <= 100){
  console.log(number3);
  number3 += 1;
}

/*----------------------------------------------------
3. for文
----------------------------------------------------*/
// for文を用いて、1から100までの数字を出力してください
for(let number4 = 1; number4 <= 100; number4 += 1){
    console.log(number4);
  }
  
/*----------------------------------------------------
4. 繰り返し処理のまとめ
----------------------------------------------------*/

  // for文を完成させてください
for (let number5 = 1 ; number5 <= 100 ; number5 += 1) {
  
    // if文を用いて、number5が3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
    if(number5 % 3 ===0){
      console.log("3の倍数です");
    }else{
      console.log(number5);
    }
  }
  
/*----------------------------------------------------
5. 配列とは
----------------------------------------------------*/

  // 定数animalsに、指定された配列を代入してください
const animals = ['dog','cat','sheep'];

// 定数animalsを出力して下さい
console.log(animals);


/*----------------------------------------------------
6. 配列の要素の取得
----------------------------------------------------*/
const animals2 = ["dog", "cat", "sheep"];

// 配列の1つ目の要素を出力してください
console.log(animals2[0]);

// 配列の3つ目の要素を出力してください
console.log(animals2[2]);


/*----------------------------------------------------
7. 配列の要素の更新
----------------------------------------------------*/
const animals3 = ["dog", "cat", "sheep"];

// 配列animals3の3つ目の要素を「rabbit」に更新してください
animals3[2]="rabbit";

// 配列animals3の3つ目の要素をコンソールに表示して下さい
console.log(animals3[2]);

/*----------------------------------------------------
8. 配列と繰り返し（1）
----------------------------------------------------*/

const animals4 = ["dog", "cat", "sheep"];

// for文を用いて、配列の値を順にコンソールに出力してください
for(let i = 0; i < 3; i++){
  console.log(animals4[i]);
}

/*----------------------------------------------------
9. 配列と繰り返し（2）
----------------------------------------------------*/

const animals5 = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力してください
console.log(animals5.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals5.length; i++) {
  console.log(animals5[i]);
}

/*----------------------------------------------------
10. オブジェクトとは
----------------------------------------------------*/
// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = {name : "にんじゃわんこ", age: 14};

// characterの値を出力してください
console.log(character);

/*----------------------------------------------------
11. オブジェクトの値の取得・更新
----------------------------------------------------*/
const character2 = {name: "にんじゃわんこ", age: 14};

// characterのnameの値を出力してください
console.log(character2.name);

// characterのageの値を「20」に更新してください
character2.age = 20;

// characterをコンソールに出力してください
console.log(character2);


/*----------------------------------------------------
12. オブジェクトを要素に持つ配列（1）
----------------------------------------------------*/
const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 1000}
  ];
  
  // charactersの1つ目の要素をコンソールに出力してください
  console.log(characters[0]);
  
  // charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
  console.log(characters[1].name);
  


/*----------------------------------------------------
13. オブジェクトを要素に持つ配列（2）
----------------------------------------------------*/
const characters2 = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5},
  ];
  
  // for文を完成させてください
  for (let i = 0; i < characters2.length ; i++ ) {
    console.log("--------------------");
    
    // 定数characterを定義してください
    const character = characters2[i];
    
    // 「名前は〇〇です」を出力してください
    console.log(`名前は${character.name}です`);
    
    // 「〇〇歳です」を出力してください
    console.log(`${character.age}歳です`);
  }

/*----------------------------------------------------
15. undefinedの対応
----------------------------------------------------*/
  const characters3 = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5},
    {name: "とりずきん"}
  ];
  
  for (let i = 0; i < characters3.length; i++) {
    console.log("--------------------");
    
    const character3 = characters3[i];
    
    console.log(`名前は${character3.name}です`);
    
    // if文を追加してください
    if(character3.age === undefined){
      console.log("年齢は秘密です");
    }else{
      console.log(`${character3.age}歳です`);
  }
    
  }
  
/*----------------------------------------------------
16. 総合演習(1)
----------------------------------------------------*/

const cafe = {
name: "Progateカフェ",
businessHours: {
    // businessHoursの値に指定されたオブジェクトを代入してください
    opening:"10:00(AM)",
    closing:"8:00(PM)"
}
};

// 「店名:〇〇」を出力してください
console.log(`店名:${cafe.name}`);

// 「営業時間:〇〇から△△」を出力してください
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);


/*----------------------------------------------------
17. 総合演習(2)
----------------------------------------------------*/
const cafe2 = {
    name: "Progateカフェ",
    businessHours: { 
      opening: "10:00(AM)",
      closing: "8:00(PM)"
    },
    // menusプロパティに配列を代入してください
    menus: [ "コーヒー","紅茶","チョコレートケーキ" ]
    
  };
  
  console.log(`店名: ${cafe2.name}`);
  console.log(`営業時間:${cafe2.businessHours.opening}から${cafe2.businessHours.closing}`);
  console.log(`----------------------------`);
  console.log("おすすめメニューはこちら");
  
  // for文を用いて配列menusの中身を表示させてください
  
  for(let i=0 ; i < cafe2.menus.length ; i++){
    console.log(cafe2.menus[i]);
  }



/*----------------------------------------------------
1. 関数とは（1）
----------------------------------------------------*/
  const greet = function() {
    console.log("こんにちは！");
    console.log("関数を学習していきましょう！");
  };
  
  // 関数を呼び出してください
  greet();
  
/*----------------------------------------------------
2. 関数とは（2）
----------------------------------------------------*/
  // 定数helloに関数を代入してください
const hello = function(){
    console.log("こんにちは！");
    console.log("私の名前は○○です");
  }
  
  
  // 定数helloに代入された関数を呼び出してください
  hello();
  
/*----------------------------------------------------
3. アロー関数
----------------------------------------------------*/
// 定数greetにアロー関数を代入してください
const greet2 = ()=> {
    console.log("こんにちは！");
  }
  
  // 定数greetを呼び出してください
  greet2();
  
/*----------------------------------------------------
4. 引数とは
----------------------------------------------------*/

  // 関数の引数にnameを追加してください
const greet3 = (name) => {
    // 「こんにちは、〇〇さん」となるように出力してください
    console.log(`こんにちは、${name}さん`);
  };
  
  // greetの引数に「ひつじ仙人」を渡して呼び出してください
  greet3("ひつじ仙人");

/*----------------------------------------------------
5. 複数の引数を受け取る関数
----------------------------------------------------*/

  // 関数の引数にnumber1とnumber2を追加してください
const add = (number1,number2) => {
    // number1とnumber2を足した値をコンソールに出力してください
    console.log(number1+number2);
    
  };
  
  // 引数に5と7を渡して関数を呼び出してください
  add(5,7);
  
/*----------------------------------------------------
6. 戻り値とは
----------------------------------------------------*/
const half = (number) => {
    // numberを2で割った値を戻り値として返してください
    return number / 2;
  };
  
// 定数resultを定義してください
const result = half(130);

// 「130の半分は〇〇です」となるように出力してください
console.log(`130の半分は${result}です`);

/*----------------------------------------------------
7. 戻り値の活用
----------------------------------------------------*/
const check = (number) => {
    // numberが3の倍数かどうかを戻り値として返してください
    return number % 3 === 0;
  };
  
  // if文の条件式で、checkを呼び出してください
  if (check(123)) {
    console.log("3の倍数です");
  } else {
    console.log("3の倍数ではありません");
  }
  
/*----------------------------------------------------
8. スコープ
----------------------------------------------------*/
  // 関数の外側に定数nameを定義してください
const name3="ひつじ仙人";
const introduce = () => {
  // 関数の内側に定数nameを定義してください
  const name3 = "にんじゃわんこ";
  // 定数nameを出力してください
  console.log(name3);
};
introduce();

// コードを貼り付けて、定数nameを出力してください。
  console.log(name3);

/*----------------------------------------------------
9. 総合演習
----------------------------------------------------*/
  // toMinutes関数を定義してください
const toMinutes = (hour,minute)=>{
    return hour * 60 + minute;
  }
  
  // 定数resultに、toMinutes関数の戻り値を代入してください
  const result2 = toMinutes(3,20);
  
  // 「◯◯分」となるように、分に換算した結果を出力してください
  console.log(`${result2}分`);



/*----------------------------------------------------
1. オブジェクトの復習
----------------------------------------------------*/

  // 定数animalを定義してください
const animal = {name:"レオ", age:3, greet:() => {
  console.log("こんにちは");
} }

// animalのnameプロパティの値を出力してください
console.log(animal.name);

// animalのgreetプロパティの関数を実行してください
animal.greet();


/*----------------------------------------------------
4. コンストラクタ（1）
----------------------------------------------------*/
class Animal2 {
  // コンストラクタを追加してください
  constructor(){
    console.log('インスタンスを生成しました');
  }
}

const animal2 = new Animal2();



/*----------------------------------------------------
5. コンストラクタ（2）
----------------------------------------------------*/
class Animal3 {
  constructor() {
    // nameの値に文字列「レオ」を代入してください
    this.name = 'レオ';
    
    // ageの値に数値の「3」を代入してください
    this.age = 3;

  }
}

const animal3 = new Animal3();

// 「名前: 〇〇」となるように出力してください
console.log(`名前: ${animal3.name}`);

// 「年齢: 〇〇」となるように出力してください
console.log(`年齢: ${animal3.age}`);



/*----------------------------------------------------
5. コンストラクタ（2）
----------------------------------------------------*/
class Animal4 {
  // 引数に「name」と「age」を追加してください
  constructor(name,age) {
    // 「"レオ"」の代わりに引数nameの値を代入してください
    this.name = name;
    
    // 「3」の代わりに引数ageの値を代入してください
    this.age = age;
  }
}

// 引数に「"モカ"」と「8」を渡してください
const animal4 = new Animal4("モカ",8);

console.log(`名前: ${animal4.name}`);
console.log(`年齢: ${animal4.age}`);



/*----------------------------------------------------
7. メソッド（1）
----------------------------------------------------*/
class Animal5 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // greetメソッドを追加してください
  greet(){
    console.log('こんにちは');
  }
  
}

const animal5 = new Animal5("レオ", 3);

console.log(`名前: ${animal5.name}`);
console.log(`年齢: ${animal5.age}`);

// animalに対してgreetメソッドを呼び出してください
animal5.greet();


/*----------------------------------------------------
11. 継承したクラスを使う
----------------------------------------------------*/

class Animal6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog6 extends Animal6 {
}

// 定数dogにDogクラスのインスタンスを代入してください
const dog6 = new Dog6('レオ',4);

// dogに対してinfoメソッドを呼び出してください
dog6.info();



/*----------------------------------------------------
13. オーバーライド（1）
----------------------------------------------------*/

class Animal7 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet2() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet2();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog2 extends Animal7 {
  // infoメソッドを追加してください
  info() {
    this.greet2();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    
    const humanAge2 = this.getHumanAge2();
    console.log(`人間年齢で${humanAge2}歳です`);
  }

  getHumanAge2() {
    return this.age * 7;
  }
}

const dog2 = new Dog2("レオ", 4);
dog2.info();





/*----------------------------------------------------
14. オーバーライド（2）
----------------------------------------------------*/
class Animal8 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet8() {
    console.log("こんにちは");
  }
  
  info8() {
    this.greet8();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog8 extends Animal8 {
  // constructorを追加してください
   constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  info8() {
    this.greet8();
    console.log(`名前は${this.name}です`);
    // 「犬種は〇〇です」と出力してください
    console.log(`犬種は${this.breed}です`);
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge8();
    console.log(`人間年齢で${humanAge}歳です`);
  }
  
  getHumanAge8() {
    return this.age * 7;
  }
}

// 3つ目の引数に「"チワワ"」を渡してください
const dog8 = new Dog8("レオ", 4,"チワワ");
dog8.info8();


/*----------------------------------------------------
1. pushメソッド
----------------------------------------------------*/

const characters4 = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];

console.log(characters4);

// pushメソッドを使って配列charactersに、文字列「とりずきん」を追加してください
characters4.push('とりずきん');

// 配列charactersを出力してください
console.log(characters4);

/*----------------------------------------------------
2. forEachメソッド
----------------------------------------------------*/

const characters5 = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];

// forEachメソッドを使って、配列characters5の中身をすべて出力してください

characters5.forEach((character) => {console.log(character);});



/*----------------------------------------------------
3. findメソッド
----------------------------------------------------*/

const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入してください
const foundNumber = numbers.find((number) =>{
return number % 3 ===0;
});

// foundNumberを出力してください
console.log(foundNumber);


const characters6 = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

// 定数charactersからidが3のオブジェクトを見つけ、定数foundCharacterに代入してください
const foundCharacter =  characters6.find((character) => {
  return character.id === 3;
});

// foundCharacterを出力してください
console.log(foundCharacter);


/*----------------------------------------------------
4. filterメソッド
----------------------------------------------------*/
const numbers2 = [1, 2, 3, 4];

// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入してください
const evenNumbers = numbers2.filter((number) =>{
return number % 2 ===0;
});

// evenNumbersを出力してください
console.log(evenNumbers);


const characters7 = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

// charactersから20歳未満のキャラクターを取り出し、定数underTwentyに代入してください

const underTwenty =  characters7.filter((character) => {
  return character.age < 20;
});
// underTwentyを出力してください
console.log(underTwenty);





/*----------------------------------------------------
5. mapメソッド
----------------------------------------------------*/

const numbers3 = [1, 2, 3, 4];

// 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入してください
const doubledNumbers = numbers3.map((number) =>{
  return number*2;
});


// 定数doubledNumbersを出力してください
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
const fullNames = names.map((name) =>{
  return name.firstName + name.lastName;
});

// 定数fullNamesを出力してください
console.log(fullNames);





/*----------------------------------------------------
1. コールバック関数を学
----------------------------------------------------*/

const printWanko = () => {
  console.log("にんじゃわんこ");
};

const printHitsuji = () => {
  console.log("ひつじ仙人");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

// 引数をprintHitsujiに書き換えて出力を確認しましょう
call(printHitsuji);


/*----------------------------------------------------
2. コールバック関数とは
----------------------------------------------------*/

const printWanko2 = () => {
  console.log("にんじゃわんこ");
};

// 関数callにcallbackという名前の引数を追加してください
const call2 = (callback) => {
  console.log("コールバック関数を呼び出します。");
  // 引数に渡したcallbackを呼び出してください
  callback();
};

// 関数printWankoを引数に渡して関数callを実行してください
  call2(printWanko2);