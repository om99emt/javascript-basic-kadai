const today = new Date();
const [month,date,year]=[
  today.getMonth(),
  today.getDate(),
  today.getFullYear()
];

console.log(year+'年',month+1+'月',date+'日');
