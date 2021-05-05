import { Request, Response } from "express";

export default class Trainee {
  getAllTrainee = (req: Request, res: Response) => {
    return res.status(200).json({
      trainees: [
        {
          id: 101,
          firstname: "Virat",
          lastname: "Kohli",
          email: "virat.kohli@india.in",
        },
        {
          id: 102,
          firstname: "Rohit",
          lastname: "Sharma",
          email: "rohit.sharma@india.in",
        },
      ],
    });
  };

  addTrainee = (req: Request, res: Response) => {
    const { firstname, lastname, email } = req.body;
    if (!firstname || !lastname || !email) {
      return res.status(400).json({
        error: "please fill all fields",
      });
    }
    return res.status(200).json({
      message: "trainee added successfully!",
      trainee: {
        firstname: firstname,
        lastname: lastname,
        email: email,
      },
    });
  };

  updateTrainee = (req: Request, res: Response) => {
    const { id, firstname, lastname, email } = req.body;
    if (!id || !firstname || !lastname || !email) {
      return res.status(400).json({
        error: "please fill all fields",
      });
    }
    return res.status(200).json({
      message: "trainee updated successfully!",
      trainee: {
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
      },
    });
  };

  deleteTrainee = (req: Request, res: Response) => {
    const id = req.query.id;
    if (!id) {
      return res.status(404).json({
        message: "unable to delete trainee",
      });
    }
    return res.status(200).json({
      message: `trainee deleted successfully with id ${id}`,
    });
  };
}
