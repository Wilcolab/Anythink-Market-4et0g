//TODO: seeds script should come here, so we'll be able to put some data in our local env

const mongoose = require("mongoose");
const User = require("../models/User.js");
const Item = require("../models/Item.js");
const Comment = require("../models/Comment.js");

async function DataSeeding() {
    try {
        for (let i = 0; i <= 100; i++) {
            await User.findOneAndUpdate(
                { email: `email${i}@gmail.com` },
                {
                    username: `Username${i}`,
                    email: `email${i}@gmail.com`
                },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );

            const newItem = await Item.findOneAndUpdate(
                { title: `title:${i}` },
                {
                    title: `title:${i}`,
                    description: `description:${i}`
                },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );

            await Comment.findOneAndUpdate(
                { body: `Body: ${i}`, item: newItem._id },
                {
                    body: `Body: ${i}`,
                    item: newItem._id
                },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        }

        console.log("Data seeding completed successfully.");
    } catch (error) {
        console.error("Data seeding error:", error);
    }
}

DataSeeding();
