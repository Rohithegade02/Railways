const { connect } = require("../config/db");

exports.verifyHigherLevel = (req, res, next) => {
    const { email } = req.body;

    checkType_query = 'Select firstname from railways.users where email =  \''+ email + '\' and ( role = \'Admin\'  )';
    connect.query(checkType_query, function(err, result){
        
        if(result.length === 1){
            next()
        } else {
            return res.status(401).json({
                message: "Unauthorized Access"
            })
        }
    })
}
