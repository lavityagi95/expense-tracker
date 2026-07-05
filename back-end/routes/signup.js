app.post("/signup", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Signup Successful"
    });

});