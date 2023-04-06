import { describe, it, expect } from 'vitest'
import Foo from "../src/Foo";


describe("Foo test", () => {

    it("Should return if user are friends", () => {
        const foo = new Foo();
        expect(foo.isTrue()).to.eq(true);

    });

});
