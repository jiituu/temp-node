const _ =require("lodash")

const items =[ 1,[2,[4,5[6]]]]

const  ems=_.flattenDeep(items)

console.log(ems)