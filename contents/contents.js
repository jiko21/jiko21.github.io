const lists = ['about', 'profile', 'skills', 'slides', 'works']

const itemList = lists
  .map((item) => {
    const itemInfo = require(`json-loader!yaml-loader!./${item}.yml`)
    return { [item]: itemInfo }
  })
  .reduce((l, r) => Object.assign(l, r), {})

export const items = itemList
