import 'mocha';
import { expect } from 'chai'
import { Path, generateIndex } from './helpers'

describe('Helpers', () => {

  describe('Path', () => {

    it('should return the held value when .emit() is called', () => {
      const path = Path('test-value-01')
      expect(path.emit()).to.equal('test-value-01')
    })

    it('should append the path string with dot notation and return a new Path monad', () => {
      const path = Path('test-value-01')
      const newPath = path.append('test-value-02')
      expect(newPath.emit()).to.equal('test-value-01.test-value-02')
    })
  })
})