QUnit.module('MAIN MODULE', {})
//Code from Case's example
QUnit.test('TEST STARTVAL', assert => {
    assert.equal(checkValue(11), 0, "This value is over 10");
    assert.equal(checkValue(0), 0, "This value is under 10");
    assert.equal(checkValue(-1), 0, "This value is under 1");
    assert.equal(checkValue(10), 1, "This value is within 1-10");
    assert.equal(checkValue(5), 1, "This value is within 1-10");
})
