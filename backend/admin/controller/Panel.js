import Panel from "../models/Panel.js";

export const getPanel = async (req, res) => {
  try {
    const response = await Panel.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPanelById = async (req, res) => {
  try {
    const response = await Panel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const savePanel = async (req, res) => {
  const judul = req.body.title;
  const harga = req.body.price;

  if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });
  if (!harga) return res.status(422).json({ msg: "Isi Harga Terlebih Dahulu" });

  try {
    await Panel.create({
      judul: judul,
      harga: harga,
    });
    res.json({ msg: "Panel Berhasil Ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePanel = async (req, res) => {
    const panel = await Panel.findOne({
        where: {
          id: req.params.id,
        },
      });
    
      if (!panel) return res.status(422).json({ msg: "Panel Tidak Ada" });
      const judul = req.body.title;
      const harga = req.body.price;
    
      // cek kolom
      if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });
      if (!harga) return res.status(422).json({ msg: "Isi Harga Terlebih Dahulu" });
    
      try {
        await Panel.update(
          {
            judul: judul,
            harga: harga,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        res.status(200).json({ msg: "Panel Berhasil Di Update" });
      } catch (error) {
        console.log(error.message);
      }
};

export const deletePanel = async (req, res) => {
    const panel = await Panel.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!panel) return res.status(422).json({ msg: "Panel Tidak Ada" });
    
      try {
        await Panel.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({ msg: "Panel Berhasil dihapus" });
      } catch (error) {
        console.log(error.message);
      }
};
