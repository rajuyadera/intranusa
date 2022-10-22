import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/UserModels.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// get By Id
export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Register
export const Register = async (req, res) => {
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });
  const { name, email, password, confPassword } = req.body;

  if(!name) return res.status(400).json({msg: "Isi Nama Terlebih Dahulu"})
  if(!email) return res.status(400).json({msg: "Isi Email Terlebih Dahulu"})
  if(!password) return res.status(400).json({msg: "Isi Password Terlebih Dahulu"})
  if(!confPassword) return res.status(400).json({msg: "Isi Confirm Password Terlebih Dahulu"})

  if (password !== confPassword)
    return res.status(400).json({
      msg: "Password Dan Confirm Password Tidak Sesuai",
    });
    if (user)
    return res.status(422).json({ msg: "Email Sudah Terdaftar" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

// Login
export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });

    const match = await bcrypt.compare(req.body.password, user[0].password);

    if (!match) return res.status(400).json({ msg: "Password Salah" });

    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email Tidak Terdaftar" });
  }
};

// Update
export const updateUsers = async (req, res) => {
  const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
  
    if (!user) return res.status(422).json({ msg: "User Tidak Ada" });
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
  
    // cek kolom
    if (!name) return res.status(422).json({ msg: "Isi name Terlebih Dahulu" });
    if (!email) return res.status(422).json({ msg: "Isi email Terlebih Dahulu" });
  
    try {
      await Users.update(
        {
          name: name,
          email: email,
          password: password,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ msg: "Users Berhasil Di Update" });
    } catch (error) {
      console.log(error.message);
    }
};



// Logout

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!user[0]) return res.sendStatus(204);

  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

//
export const Delete = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ada" });

  try {
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Berhasil Terhapus" });
  } catch (error) {
    console.log(error.message);
  }
};
