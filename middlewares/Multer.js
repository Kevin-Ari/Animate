const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/imgOport')
    },
    filename: (req, file, cb) => {
        console.log(file.mimetype);
        console.log(file.mimetype.split('/'));
        cb(null, `${uuidv4()}.${file.mimetype.split('/')[1]}`)
        console.log(`${uuidv4()}.${file.mimetype.split('/')[1]}`);
    }
})

const storageOport = multer({sotrage : storage})

module.exports = {
    storageOport
}