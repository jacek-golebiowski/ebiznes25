class User {
    constructor(email, passwordHash) {
      this.id = Date.now().toString();
      this.email = email;
      this.passwordHash = passwordHash;
    }
  }
  
  module.exports = User;
  