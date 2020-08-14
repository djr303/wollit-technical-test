import { v4 as uuidv4 } from 'uuid';

import { RawBelongings } from './belongings'

type TPath = {
  emit: () => string
  append: (p: string) => TPath
}

const Path = (x: string): TPath => {
  return {
    emit: () => x,
    append: (p: string) => Path.of(`${x}${p}`)
  }
}

Path.of = (x: string) => {
  return Path(x)
}

const getPathNotation = (object: any, key: string) => Array.isArray(object) ? `[${key}]` : key

const generateIndex = (o: RawBelongings | any, i?: { [key: string]: string }, p?: TPath) => {

  const categoryPath = '.categories'

  let pathNotation
  let path = p
  let index = i || {}

  for (let key in o) {
    pathNotation = getPathNotation(o, key)
    path = p ? p.append(pathNotation) : Path(pathNotation)
    index[o[key].id] = path.emit()

    if (o[key].categories !== null && Array.isArray(o[key].categories)) {
      path = path.append(categoryPath)
      index = { ...index, ...generateIndex(o[key].categories, index, path) }
    }
  }

  return index
}

const generateUUID = () => uuidv4();

export {
  Path,
  generateIndex,
  generateUUID
}