const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const  NFTSchema = new Schema({
    token_id: String,
    background_color: String,
    image_url: String,
    image_preview_url: String,
    image_thumbnail_url: String,
    image_original_url: String,
    animation_url: String,
    animation_original_url: String,
    name: String,
    description: String,
    external_link: String,
    permalink:String
})


const NFT = mongoose.model("NFT", NFTSchema)

module.exports = NFT