import path from 'path'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import fs from 'fs'

import { generateIndex, generateUUID } from './helpers'
import { Category, Item } from './belongings'

export class Store {

  private relativeFilePath: string = './data/belongings.json'
  private instance: any
  private index: { [key: string]: string }
  private filePath: string

  constructor(filePath?: string) {
    this.filePath = path.join(__dirname, filePath || this.relativeFilePath)
    const adapter = new FileSync(this.filePath)
    this.instance = low(adapter)
    this.generateIndex()
  }

  private createPayload(name: string): Category {
    const id = generateUUID()

    return {
      id,
      name,
    }
  }

  private generateIndex(): void {
    this.index = generateIndex(JSON.parse(fs.readFileSync(this.filePath, 'utf8')).root)
  }

  getCategories(parentCategoryId?: string): Category[] {
    const categoryPath = parentCategoryId ? this.index[parentCategoryId] : void 0
    return categoryPath ? this.instance.get(`root${categoryPath}.categories`).value() : this.instance.getState()
  }

  addItem(name: string, parentCategoryId: string): Item {
    const payload = this.createPayload(name)
    const categoryPath = this.index[parentCategoryId]
    const items = this.instance.get(`root${categoryPath}.items`).value()

    if (items) {
      this.instance.get(`root${categoryPath}.items`)
        .push(payload)
        .write()
    } else {
      this.instance.set(`root${categoryPath}.items`, [payload])
        .write()
    }

    return payload
  }

  addCategory(name: string, parentCategoryId?: string): Category {
    const payload = this.createPayload(name)
    const categoryPath = parentCategoryId ? `root$${this.index[parentCategoryId]}.categories` : 'root'
    const categories = this.instance.get(categoryPath).value()

    if (categories) {
      this.instance.get(categoryPath)
        .push(payload)
        .write()
    } else {
      this.instance.set(categoryPath, [payload])
        .write()
    }

    this.generateIndex()

    return payload
  }

  updateCategory(id: string, parentCategoryId?: string, name?: string, root?: boolean): Category {
    const categoryPath = this.index[id]
    const subTree = this.instance.get(categoryPath).value()

    if (name) {
      subTree.name = name
    }

    if (parentCategoryId || root) {
      const newCategoryPath = root ? 'root' : `root${this.index[parentCategoryId]}.categories`

      this.instance.get(categoryPath)
        .remove()
        .write()

      const categories = this.instance.get(newCategoryPath).value()

      if (categories) {
        this.instance.get(newCategoryPath)
          .push(subTree)
          .write()
      } else {
        this.instance.set(newCategoryPath, [subTree])
          .write()
      }
    } else {
      this.instance.set(categoryPath, subTree)
    }

    return subTree
  }
}

let store

export const getStore = (StoreClass: () => void): Store => {
  return store ? store : store = new StoreClass()
}

export default getStore.bind({}, Store)