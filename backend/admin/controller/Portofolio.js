import Portofolio from "../models/Portofolio.js";
import path from "path";
import fs from "fs";

// get
export const getPortofolio = async (req, res) => {
  try {
    const response = await Portofolio.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get By Id
export const getPortofolioById = async (req, res) => {
  try {
    const response = await Portofolio.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Create Portofolio
export const savePortofolio = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "Pilih File Terlebih Dahulu" });
  const judul = req.body.title;
  const file = req.files.file;
  const alamat = req.body.location;
  const keterangan = req.body.text;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  // cek judul
  if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });

  // cek keterangan
  if (!keterangan)
    return res.status(422).json({ msg: "Isi Keterangan Terlebih Dahulu" });

  // cek alamat
  if (!alamat)
    return res.status(422).json({ msg: "Isi Alamat Terlebih Dahulu" });

  // cek image
  if (!fileName)
    return res.status(422).json({ msg: "Pilih Gambar Terlebih Dahulu" });
  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Image" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Gambar Tidak Boleh Lebih Dari 5mb" });

  file.mv(`./public/image/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    // add to database
    try {
      await Portofolio.create({
        judul: judul,
        image: fileName,
        url: url,
        alamat: alamat,
        keterangan: keterangan,
      });
      res.status(201).json({ msg: "Portofolio Berhasil Ditambahkan" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

// Update Portofolio
export const updatePortofolio = async (req, res) => {
  const portofolio = await Portofolio.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!portofolio) return res.status(404).json({ msg: "Portofolio Tidak Ada" });
  let fileName = "";
  if (req.files === null) {
    fileName = Portofolio.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Image" });
    if (fileSize > 5000000)
      return res
        .status(422)
        .json({ msg: "Size Gambar Tidak Boleh Lebih Dari 5MB" });

    const filePath = `./public/image/${portofolio.image}`;
    fs.unlinkSync(filePath);

    file.mv(`./public/image/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const judul = req.body.title;
  const alamat = req.body.location;
  const keterangan = req.body.text;
  const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
  // cek judul
  if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });

  // cek keterangan
  if (!keterangan)
    return res.status(422).json({ msg: "Isi Keterangan Terlebih Dahulu" });

  // cek alamat
  if (!alamat)
    return res.status(422).json({ msg: "Isi Alamat Terlebih Dahulu" });

  try {
    await Portofolio.update(
      {
        judul: judul,
        image: fileName,
        url: url,
        alamat: alamat,
        keterangan: keterangan,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Portofolio Berhasil Di Update" });
  } catch (error) {
    console.log(error.message);
  }
};

// delete Portofolio
export const deletePortofolio = async (req, res) => {
  const portofolio = await Portofolio.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!portofolio) return res.status(404).json({ msg: "Portofolio Tidak Ada" });

  try {
    const filePath = `./public/image/${portofolio.image}`;
    fs.unlinkSync(filePath);
    await Portofolio.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Portofolio Berhasil Terhapus" });
  } catch (error) {
    console.log(error.message);
  }
};
