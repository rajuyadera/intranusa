import Cctv from "../models/Cctv.js";

// get Cctv
export const getCctv = async (req, res) => {
  try {
    const response = await Cctv.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get Cctv By Id
export const getCctvId = async (req, res) => {
  try {
    const response = await Cctv.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveCctv = async (req, res) => {
  const judul = req.body.title;
  const harga = req.body.price;
  const specifikasi = req.body.text;

  // cek kolom
  if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });
  if (!harga) return res.status(422).json({ msg: "Isi Harga Terlebih Dahulu" });
  if (!specifikasi)
    return res.status(422).json({ msg: "Isi Specifikasi Terlebih Dahulu" });

  // create Database
  try {
    await Cctv.create({
      judul: judul,
      harga: harga,
      specifikasi: specifikasi,
    });
    res.json({ msg: "Cctv Berhasil DItambahkan" });
  } catch (error) {
    console.log(error);
  }
};

export const updateCctv = async (req, res) => {
  const cctv = await Cctv.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!cctv) return res.status(422).json({ msg: "Cctv Tidak Ada" });
  const judul = req.body.title;
  const harga = req.body.price;
  const specifikasi = req.body.specifikasi;

  // cek kolom
  if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });
  if (!harga) return res.status(422).json({ msg: "Isi Harga Terlebih Dahulu" });
  if (!specifikasi)
    return res.status(422).json({ msg: "Isi Specifikasi Terlebih Dahulu" });

  try {
    await Cctv.update(
      {
        judul: judul,
        harga: harga,
        specifikasi: specifikasi,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Cctv Berhasil Di Update" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCctv = async (req, res) => {
  const cctv = await Cctv.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!cctv) return res.status(422).json({ msg: "Cctv Tidak Ada" });

  try {
    await Cctv.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "CCTV Berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
