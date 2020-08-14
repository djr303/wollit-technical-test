import { RawBelongings } from './data/belonging'

type TPath = {
  emit: () => string
  append: (p: string) => TPath
}

const Path = (x: string): TPath => {
  return {
    emit: () => x,
    append: (p: string) => Path.of(`${x}.${p}`)
  }
}

Path.of = (x: string) => {
  return Path(x)
}

const generateIndex = (o: RawBelongings | any, i? : { [key: string]: string }, p? : TPath) => {
  
  const index = i || {}

  let path
  
  /* for (let key in o){
    path = Path(key)
    if (o[key] !== null && typeof(o[key]) == "object") {
      index[o.id] = path.emit()
      return generateIndex(o[key], path);
    }
  } */

  return index
}

export {
  Path,
  generateIndex,
}