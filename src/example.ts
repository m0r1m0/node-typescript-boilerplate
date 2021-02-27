function main() {
  console.log(hello())
}

export function hello(name?: string) {
  return `Hello ${name ?? 'World'}!`
}

main();