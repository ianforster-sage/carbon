import { tagComponent } from './tags';

describe('tagComponent', () => {
  describe('when no additional tag props are sent', () => {
    it('returns the component name tag', () => {
      expect(tagComponent('my-component', {})).toEqual({ ['data-component']: 'my-component' });
    });
  });

  describe("when a data-component tag is sent", () => {
    it("uses this over the Carbon component tag", () => {
      expect(tagComponent('my-component', { ['data-component']: 'specific'})).toEqual({ ['data-component']: 'specific' });
    });
  });

  describe('when role and element props are sent', () => {
    it('adds those to the tagProps object', () => {
      expect(tagComponent('my-component', { ['data-element']: 'my-component', ['data-role']: 'contacts'}))
        .toEqual(
          {
            ['data-component']: 'my-component',
            ['data-element']: 'my-component',
            ['data-role']: 'contacts'
          }
        );
    });
  });
});
