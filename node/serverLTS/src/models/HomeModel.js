const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titule: String,
    age: Number,
    name: {
        type: String,
        required: true
    }
});

const HomeModel = mongoose.model('Home', HomeSchema);

// module.exports = HomeModel;

class Home {

}

module.exports = Home;