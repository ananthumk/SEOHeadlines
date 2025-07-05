const express = require('express');
const app = express();

const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


const headlineTemplate = [
    "Why {name} is {location}'s Best Kept Secret in 2025",
    "How {name} Became {location}'s Premier Destination",
    "Discover Why {name} is {location}'s #1 Choice",
    "The Ultimate Guide to {name} in {location}",
    "{name}: Your Gateway to Excellence in {location}",
    "Why {name} Sets the Standard in {location}",
    "Experience the Magic of {name} in {location}",
    "How {name} is Transforming {location}'s Landscape",
    "The Story Behind {name}'s Success in {location}",
    "What Makes {name} {location}'s Top Choice",
    "Unveiling the Excellence of {name} in {location}",
    "Why {name} is Leading the Way in {location}",
    "{name}: Where Quality Meets Excellence in {location}",
    "The {name} Experience: {location}'s Hidden Gem",
    "How {name} is Redefining Standards in {location}"
]

const generateHeadline = (name, location) => {
    const randomIndex = Math.floor(Math.random() * headlineTemplate.length);
    return headlineTemplate[randomIndex].replace("{name}", name).replace("{location}", location);
}

const generateRating = () => {
    return (3.5 + Math.random() * 1.5).toFixed(1);
}

const generateReviews = () => {
    return Math.floor(50 + Math.random() * 200)
}

app.post('/business-data', (req, res) =>{
    try {
        const { name, location } = req.body;
        if (!name || !location){
            return res.status(400).json({error: 'Name and Location are required'});
        }

        res.status(200).json({
            "rating": generateRating(),
            "reviews": generateReviews(),
            "headline": generateHeadline(name, location),
        })
    } catch (error) {
        console.error("Error generating business data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.get('/regenerate-headline', (req, res) => {
    try {
        const {name , location } = req.query;
        if (!name || !location) {
            return res.status(400).json({ error: 'Name and Location are required' });
        }

        const newHeadline = generateHeadline(name, location);
        res.status(200).json({ headline: newHeadline });
    } catch (error) {
        console.error("Error regenerating headline:", error);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
}) 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!'})
})

app.use('*', (req, res) => {
    res.status(500).json({ error: 'Invalid endpoint'})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;



