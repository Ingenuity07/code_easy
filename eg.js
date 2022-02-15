const url ="https://www.youtube.com/watch?v=mo6sujHsXPk&list=RDNgpIRBOOFTg&index=6"

let params = new URLSearchParams(url.slice(url.indexOf('?')));

const a = params.get("v")

console.log(typeof a);
console.log(params.get("list"));