const ctrlHome = {};

ctrlHome.rutaGet = (req, res) => {
    res.send({msg: 'Ruta Get'})
};
ctrlHome.rutaPost = (req, res) => {
    console.log(req.body)

    res.send(req.body)
};
ctrlHome.rutaPut = (req, res) => {
    res.send('PUT')
};
ctrlHome.rutaDelete = (req, res) => {
    res.send('DELETE')
};

module.exports = ctrlHome