import It from "../models/ItSolution.js";

export const getIt = async (req, res) => {
  try {
    const response = await It.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getItById = async (req, res) => {
  try {
    const response = await It.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveIt = async (req, res) => {
  const judul = req.body.title;
  const keterangan = req.body.text;

  if (!judul) res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });
  if (!keterangan)
    res.status(422).json({ msg: "Isi Keterangan Terlebih Dahulu" });

  try {
    await It.create({
      judul: judul,
      keterangan: keterangan,
    });
    res.json({ msg: "Berhasil Ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateIt = async (req, res) => {
    const it = await It.findOne({
        where: {
          id: req.params.id,
        },
      });
    
      if (!it) return res.status(422).json({ msg: "Data Tidak Ada" });
      const judul = req.body.title;
      const keterangan = req.body.text;
    
      // cek kolom
      if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });
      if (!keterangan) return res.status(422).json({ msg: "Isi Keterangan Terlebih Dahulu" });
    
      try {
        await It.update(
          {
            judul: judul,
            keterangan: keterangan,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        res.status(200).json({ msg: "Berhasil Di Update" });
      } catch (error) {
        console.log(error.message);
      }
};

export const deleteIt = async (req, res) => {
    const it = await It.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!it) return res.status(422).json({ msg: "Data Tidak Ada" });
    
      try {
        await It.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({ msg: "Berhasil dihapus" });
      } catch (error) {
        console.log(error.message);
      }
};
