import UsersService from './users.service';

describe('tgh.services.users', () => {
  let usersService;

  beforeEach(inject(function() {
    usersService = new UsersService();
  }));

  afterEach(function() {
    usersService = null;
  });

  it('should test the service exists', () => {
    expect(UsersService).to.not.be.undefined;
    expect(usersService).to.not.be.undefined;
    expect(usersService.getUsers).to.not.be.undefined;
    expect(usersService.getPrimaryUser).to.not.be.undefined;
    expect(usersService.addUser).to.not.be.undefined;
    expect(usersService.deleteUser).to.not.be.undefined;
  });

  it('should test that first call to getUsers returns expected default users', () => {
    let users = usersService.getUsers();

    expect(users.length).to.equal(2);

    expect(users[0].id).to.equal(1);
    expect(users[0].firstName).to.equal('Owen');
    expect(users[0].lastName).to.equal('Buckley');
    expect(users[0].isPrimary).to.equal(true);

    expect(users[1].id).to.equal(2);
    expect(users[1].firstName).to.equal('The');
    expect(users[1].lastName).to.equal('Greenhouse');
    expect(users[1].isPrimary).to.equal(false);
  });

  it('should test that getPrimaryUser call works as expected', () => {
    let primaryUser = new UsersService().getPrimaryUser();

    expect(primaryUser.id).to.equal(1);
    expect(primaryUser.firstName).to.equal('Owen');
    expect(primaryUser.lastName).to.equal('Buckley');
    expect(primaryUser.isPrimary).to.equal(true);
  });

  it('should test that addUsers call works as expected', () => {
    let users = [];
    let found = false;
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    usersService.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = usersService.getUsers();

    // test new user was added
    users.filter((user) => {
      if ((user.firstName + user.lastName) === (newUser.firstName + newUser.lastName)) {
        found = true;
      }
    });

    expect(found).to.equal(true);
  });

  it('should test that getPrimaryUser call works as expected', () => {
    let primaryUser = usersService.getPrimaryUser();

    expect(primaryUser.id).to.equal(1);
    expect(primaryUser.firstName).to.equal('Owen');
    expect(primaryUser.lastName).to.equal('Buckley');
    expect(primaryUser.isPrimary).to.equal(true);
  });

  it('should test that deleteUsers call works as expected when starting with default users', () => {
    let users = [];
    let user = {};
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    usersService.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = usersService.getUsers();

    // get our user
    user = users.find((user) => {
      return (user.firstName + user.lastName) === (newUser.firstName + newUser.lastName);
    });

    // add a user
    usersService.deleteUser(user.id);

    // get users
    users = usersService.getUsers();

    expect(users.length).to.equal(2);

    expect(users[0].id).to.equal(1);
    expect(users[0].firstName).to.equal('Owen');
    expect(users[0].lastName).to.equal('Buckley');
    expect(users[0].isPrimary).to.equal(true);

    expect(users[1].id).to.equal(2);
    expect(users[1].firstName).to.equal('The');
    expect(users[1].lastName).to.equal('Greenhouse');
    expect(users[1].isPrimary).to.equal(false);
  });

});