const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { email, username, password:Npassword, password_check } = req.body
    if(!email || !Npassword){
        return res.json({status: "error", error: "Please Enter your email and password"})
    }
    else{
        console.log(req);
        if(Npassword != password_check){
            return res.json({status: "error", error: "Passwords do not match."})
        }
        db.query('SELECT email from users WHERE email = ?', [email], async (err, result) =>{
            if(err) throw err;
            if(result[0])return res.json({status: "error", error: "Email is already registered"})
            else{
                const password = await bcrypt.hash(Npassword, 8);
                console.log(password);
                db.query('INSERT INTO users SET ?', {email:email,password:password,name:username}, (error, results) =>{
                    if(error)throw error;
                    return res.json({ status: "success", success: "User has been registered"})
                })
            }
        })
    }
}

module.exports = register;