import {expect} from 'chai'
import {isAhagram } from './anagrams'

describe('is the thise two words are anagram',()=>{
    it('should all letetr be the same in the second word',()=>{
        const expeccted = true
        const actual = isAhagram('listen', 'silent')
        expect(actual).to.equal(expeccted)
    })
    it('return false when either of the string has extra letter',()=>{
        const expeccted = false
        const actual = isAhagram('elbows', 'below')
        expect(actual).to.equal(expeccted)
        const actual2 = isAhagram('below', 'elbows')
        expect(actual2).to.equal(expeccted)
    })
})