import { Request, Response } from "express";

export default class User {
  getAllUser = (req, res: Response) => {
    return res.status(200).json({
      user: {
        id: 101,
        firstname: "ketan",
        lastname: "Jadhav",
        email: "ketan.jadhav@successive.tech",
      },
    });
  };

  addUser = (req: Request, res: Response) => {
    const { firstname, lastname, email } = req.body;
    if (!firstname && !lastname && !email) {
      return res.status(400).json({
        error: "please fill all fields",
      });
    }
    return res.status(200).json({
      message: "user added successfully",
      user: {
        firstname: firstname,
        lastname: lastname,
        email: email,
      },
    });
  };

  updateUser = (req: Request, res: Response) => {
    const { id, firstname, lastname, email } = req.body;
    if (!firstname && !lastname && !email) {
      return res.status(400).json({
        error: "please fill all fields",
      });
    }
    return res.status(200).json({
      message: "user updated successfully",
      user: {
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
      },
    });
  };

  deleteUser = (req: Request, res: Response) => {
    const id = req.query.id;

    if (!id) {
      return res.status(400).json({
        error: "unable to delete user",
      });
    }
    return res.status(200).json({
      message: "user deleted successfully",
      user: {
        id: id,
      },
    });
  };
}
