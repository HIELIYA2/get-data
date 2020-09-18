// constructor
const Trad = function (trad) {
  this.Trad = trad;
};

Trad.getAll = async (req, res) => {
  await fetch(req.url)
    .then((res) => res.json())
    .then((data) =>
    // send data
    )
    .catch((error) => {
    //  need log
    });
};

module.exports = Trad;
