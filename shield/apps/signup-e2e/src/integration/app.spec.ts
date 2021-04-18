import { getUsers, getAddUserButton } from '../support/app.po';

describe('signup', () => {
  beforeEach(() => cy.visit('/'));

  it('should display user info', () => {
    getUsers().should((t)=>expect(t.length).equal(2));
    getAddUserButton().click();
    getUsers().should((t) => expect(t.length).equal(3));
  });
});
