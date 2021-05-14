import {expect } from 'chai'
import { getLetterCount} from './letter'
describe('the function return letter count',()=>{
    it('should return an empty object when pass an empty string',()=>{
        const expected ={};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected)
    })
    it ('return the correct letter count for a word',()=>{
        const expected = {c:1, a:1, t:1}
        const actual = getLetterCount('cat')
        expect(actual).to.deep.equal(expected)
    })
    it('return the correct letter count for the word mississippi',()=>{
        'mississippi'
        const expected = {m:1, i:4, s:4, p:2}
        const actual = getLetterCount('mississippi')
        expect(actual).to.deep.equal(expected)
    })

})