const multer = require('multer');

const path = require('path');


const dest = path.join(__dirname, '../../uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> cb(null, dest),
    filename: (req, file, cb)=>{
        cb(null, `${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage})

module.exports = upload;