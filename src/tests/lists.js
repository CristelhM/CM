/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

// These are Chimp globals
/* globals browser assert server */

function countLists() {
  browser.waitForExist('.list-todo');
  const elements = browser.elements('.list-todo');
  return elements.value.length;
};

function signinExists() {
  browser.waitForExist('.login-link-text');
  const elements = browser.elements('.login-link-text');
  return elements.value.length > 0;
}

describe('list ui', function () {    
  beforeEach(function () {
    browser.url('http://localhost:3000');    
  });

  it('can sign up @watch', function () {    
    const hasSignUp = signinExists();
    assert.equal(hasSignUp, true);
  });
});