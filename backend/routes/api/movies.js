import express from "express"
import Movies from "../../models/Movies.js";

const router = express.Router();

// CREATE
router.post("/addMovie", async (req, res) => {
    const newMovie = new Movies(req.body)

    try {
        const addMovie = await newMovie.save()
        res.status(200).json(addMovie)
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/updateMovie/:id", async (req, res) => {
    try {
        const updateMovie = await Movies.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateMovie)
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE
router.delete("/deleteMovie/:id", async (req, res) => {
    try {
        const deleteMovie = await Movies.findByIdAndDelete(req.params.id)
        res.status(200).json("Movie Deleted!")
    } catch(err) {
        res.status(500).json(err)
    }
})

// GET
router.get("/:id", async (req, res) => {
    try {
        const getMovie = await Movies.findById(req.params.id)
        res.status(200).json(getMovie)
    } catch(err) {
        res.status(500).json(err)
    }
})

// GET ALL
router.get("/", async (req, res) => {
    try {
        const movies = await Movies.find();
        res.status(200).json(movies)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/',(req, res) => res.send('Auth route'));

export default router