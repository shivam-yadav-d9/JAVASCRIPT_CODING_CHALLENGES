const toCamelcase = (str) => {
  str = str.split();
  //   console.log(str)
  str.toLowerCase() + str.slice(1)
  return str;
}


console.log(toCamelcase("hello world shivam"))