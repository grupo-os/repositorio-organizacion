const ctrlHome = {};

ctrlHome.rutaGet = (req, res) => {
    res.send('Peticion GET')
};
ctrlHome.rutaPost = (req, res) => {
    // console.log(req.body)

    res.send('Petecion POST')
};
ctrlHome.rutaPut = (req, res) => {
    res.send('Peticion PUT')
};
ctrlHome.rutaDelete = (req, res) => {
    res.send('Peticion DELETE')
};

module.exports = ctrlHome