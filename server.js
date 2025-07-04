const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;

app.post('/business-data', (req, res) => {
  const {name, location} = req.body;

  if(!name || !location){
    return res.status(400).json({ error: "Business name and location are required" });
  }

  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 500) + 10;
  const headline = `Why ${name} is ${location}'s Sweetest Spot in 2025`;
  res.json({rating, reviews, headline});
});

const headlineTemplates = [
  "Why {name} is {location}'s Top Pick in 2025",
  "{name}: Revolutionizing Small Businesses in {location}",
  "Discover Why Everyone in {location} Loves {name}",
  "{name} – The Heart of {location}'s Local Scene",
  "{name}: {location}'s Hidden Gem You Need to Try",
  "How {name} Became a Household Name in {location}",
  "The Secret Behind {name}'s Success in {location}",
  "What Makes {name} a Must-Visit in {location}?",
  "{name}: Redefining Excellence in {location}",
  "{location} Locals Can’t Stop Talking About {name}",
  "Top Reasons to Choose {name} in {location}",
  "Experience the Magic of {name} in {location}",
  "{name}: A Trusted Name Among {location} Businesses",
  "{name} Sets the Standard for Quality in {location}",
  "Why {name} is the Go-To Choice in {location}",
  "What Sets {name} Apart in the {location} Market",
  "How {name} is Transforming Services in {location}",
  "Discover the Story of {name} in {location}",
  "Here’s Why {name} Stands Out in {location}",
  "{name} — The Future of Local Business in {location}"
];



app.get('/regenerate-headline', (req, res) => {
    const { name, location } = req.query;

    if (!name || !location) {
        return res.status(400).json({ error: "Missing name or location" });
    }

    const randomTemplate = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
    const headline = randomTemplate.replace('{name}', name).replace('{location}', location);

    res.json({ headline });
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
