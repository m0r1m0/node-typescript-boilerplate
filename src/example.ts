function main() {
  console.log(hello())
}

function hello(name?: string) {
  return `Hello ${name ?? 'World'}!`
}

main();