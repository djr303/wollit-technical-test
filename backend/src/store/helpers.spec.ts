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
      const newPath = path.append('.test-value-02')
      expect(newPath.emit()).to.equal('test-value-01.test-value-02')
    })
  })

  describe('generateIndex', () => {

    it('shoud return key, value object indexing each category by ID', () => {

      const input = [
        {
          "id": "2686f8c0-0e3b-411e-884c-6061a2bea8fe",
          "name": "Books",
          "categories": [
            {
              "id": "89906325-a32f-45c6-9458-0579664f1eb3",
              "name": "Fiction",
              "items": [
                {
                  "id": "e4854e0e-ed49-451e-909d-7edc89bd239c",
                  "name": "27 inch LCD HDMI monitor"
                },
                {
                  "id": "a654cd8f-d347-4ba9-a12e-55a314e85f27",
                  "name": "Superwide LCD screen"
                }
              ]
            },
            {
              "id": "7389a026-3ea3-4d1a-8aa1-5d134894fe22",
              "name": "Non-fiction"
            }
          ],
        },
        {
          "id": "43610e42-fb4a-42bb-a2f8-44a19ad087d1",
          "name": "Music",
          "categories": [
            {
              "id": "6b29dc7e-3490-4ced-b35d-178ce7d39797",
              "name": "Pop",
              "items": [
                {
                  "id": "e4854e0e-ed49-451e-909d-7edc89bd239c",
                  "name": "Purple rain - Prince"
                }
              ]
            },
            {
              "id": "4542d41d-becf-450c-af55-002b3630d841",
              "name": "Podcasts"
            }
          ],
        }
      ]

      const result = generateIndex(input)

      const expected = {
        "2686f8c0-0e3b-411e-884c-6061a2bea8fe": "[0]",
        "43610e42-fb4a-42bb-a2f8-44a19ad087d1": "[1]",
        "4542d41d-becf-450c-af55-002b3630d841": "[1].categories[1]",
        "6b29dc7e-3490-4ced-b35d-178ce7d39797": "[1].categories[0]",
        "7389a026-3ea3-4d1a-8aa1-5d134894fe22": "[0].categories[1]",
        "89906325-a32f-45c6-9458-0579664f1eb3": "[0].categories[0]",
      }


      expect(result).to.deep.equal(expected)
    })
  })
})