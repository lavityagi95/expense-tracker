const handleSubmit = async () => {

    const user = {
        name,
        email,
        password
    };

    const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    console.log(data);
};