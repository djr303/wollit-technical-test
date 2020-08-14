
import 'mocha'
import { expect } from 'chai'
import getStore, { Store, getStore as getStoreInteral } from './'

describe('Store', () => {

  describe('Store class', () => {
    it('should return a new instance of the class when instantiated', () => {
      const store = new Store()
      expect(store.constructor.name).to.equal('Store');
    });

    it('should return full json object when .get() method is called', () => {
      const store = new Store()
      const result = store.get()
      expect(result).to.be.ok
    })
  })
})