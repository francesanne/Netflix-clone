const db = require("../routes/db-config");

const addImage = async (req, res) => {
    console.log("Received POST request to addImage");
    const { imageUrl } = req.body;

    if (!imageUrl) {
        return res.json({ status: "error", error: "Please provide an image URL" });
    }

    // Check if the Movie URL already exists in the database
    db.query('SELECT * FROM movies WHERE src = ?', [imageUrl], (error, results) => {
        if (error) {
            console.error("Error checking image:", error);
            return res.status(500).json({ status: "error", error: "An error occurred while checking the image" });
        }

        if (results.length > 0) {
            // Movie already exists in the database
            return res.json({ status: "already_exists", message: "Movie already added" });
        } else {
            // Insert the Movie URL into the database
            db.query('INSERT INTO movies (src) VALUES (?)', [imageUrl], (error, results) => {
                if (error) {
                    console.error("Error adding image:", error);
                    return res.status(500).json({ status: "error", error: "An error occurred while adding the image" });
                } else {
                    return res.status(200).json({ status: "success", message: "Movie added successfully" });
                }
            });
        }
    });
};

module.exports = addImage;
