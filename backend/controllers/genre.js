const { Genre } = require("../helper/relation");

exports.createGenre = async (req, res) => {
  try {
    const { genre, idMusic } = req.body;
    const data = await Genre.create({
      genre,
      idMusic,
    });
    res.status(201).json({ msg: "genre created", data: data });
  } catch (error) {
    console.log(error);
  }
};

exports.getGenre = async (req, res) => {
  try {
    const genre = await Genre.findAll();
    res.status(200).json(genre);
  } catch (error) {
    console.log(error);
  }
};

exports.getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: {
        id: req.params.id,
      },o
    });

    res.status(200).json(genre);
  } catch (error) {
    console.log(error);
  }
};

exports.updateGenre = async (req, res) => {
  try {
    const { genre, idMusic } = req.body;
    await Genre.update(
      {
        genre,
        idMusic,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(201).json({ msg: "genre updated" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteGenre = async (req, res) => {
  try {
    await Genre.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(201).json({ msg: "genre deleted" });
  } catch (error) {
    console.log(error);
  }
};
