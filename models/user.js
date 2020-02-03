class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  static getAllUsers() {
    const sql = `SELECT * From users`;
    return sql;
  }
  static getUserDetails(user_id) {
    const sql = `SELECT * From users Where Id=${user_id}`;
    return sql;
  }
  static deleteUser(user_id) {
    const sql = `DELETE * From users Where Id=${user_id}`;
    return sql;
  }
  addusers() {
    const sql = `INSERT INTO users VALUES(${this.id},'${this.name}')`;
    return sql;
  }
}
module.exports = User;
// export default User;
