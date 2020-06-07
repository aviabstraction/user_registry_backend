import User from "../models/user";

export class UserService {
  name?: string;
  mobile_number: string;
  created_at: Date;
  is_active: Boolean;

  constructor(
    name?: string,
    mobile_number?: string,
    created_at?: Date,
    is_active?: Boolean
  ) {
    this.name = name;
    this.mobile_number = mobile_number;
    this.created_at = created_at;
    this.is_active = is_active;
  }

  createUser = async () => {
    try {
      const createUser = await User.create({
        name: this.name,
        mobile_number: this.mobile_number,
        created_at: this.created_at,
        is_active: this.is_active,
      });
      return createUser;
    } catch (err) {
      console.log(err, "error in creating user");
    }
  };

  getUser = async () => {
    try {
      const getUser = await User.find({
        mobile_number: this.mobile_number,
      });
      return getUser;
    } catch (err) {
      console.log(err, "error in fetching a user");
    }
  };

  getAllUsers = async () => {
    try {
      const allUsers = await User.collection.count();
      return allUsers;
    } catch (err) {
      console.log(err, "error in fetching all users");
    }
  };
}
