let myToken = "12345"
let checkToken=(req,res,next)=>{
    if(req.query.token =="" || req.query.token==undefined){
        res.send({
            status:0,
            msg:"please fill token"
        })
    }

    if(req.query.tokens!==myToken){
        return res.send({
            status:0,
            msg:"Invalid token"
        })
    }
    next();
}
module.exports = {checkToken} //exporting the middleware function