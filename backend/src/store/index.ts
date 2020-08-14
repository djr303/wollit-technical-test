import path from 'path'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

export class Store {

  private relativeFilePath: string = './data/belongings.json'
  private instance: any

  constructor() {

    const filePath = path.join(__dirname, this.relativeFilePath)
    const adapter = new FileSync(filePath)
    this.instance = low(adapter)
  }

  get(): any {
    return this.instance.get('[0]').value()
  }
}

let store

export const getStore = (StoreClass: () => void): Store => {
  return store ? store : store = new StoreClass()
}

export default getStore.bind({}, Store)