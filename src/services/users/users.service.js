export default class UsersService {
  constructor() {
    this.users = [{
      id: 1,
      firstName: 'Owen',
      lastName: 'Buckley',
      isPrimary: true
    }, {
      id: 2,
      firstName: 'The',
      lastName: 'Greenhouse',
      isPrimary: false
    }];
  }

  getUsers() {
    return this.users;
  }

  getPrimaryUser() {
    return this.users.find(user => user.isPrimary);
  }

  addUser(firstName, lastName) {
    this.users.push({
      id: new Date().getTime(),
      firstName,
      lastName,
      isPrimary: false
    });
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => {
      return user.id !== id;
    });
  }
}