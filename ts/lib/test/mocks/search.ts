type nameSearch = (nameSearch: string) => number

export const nameSearcher: nameSearch = (nameString) => {
  console.info(`Input: ${JSON.stringify(nameString)}`)
  return 0;
}
