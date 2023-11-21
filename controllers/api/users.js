
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require ('../../models/user');

async function login (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) throw new Error();

        const match = await bcrypt.compare(req.body.password, user.password);
        
        if (!match) throw new Error('Invalid username or password');
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json('Bad Credentials');
    }
}

async function create (req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err)
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }


// Helper function
function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

module.exports = {
    create,
    login,
    checkToken
};

