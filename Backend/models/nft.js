const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const  NFTSchema = new Schema({
    id: Number,
    tokenid: String,
    background_color: String,
    image_url: String, 
    image_preview_url: String,
    image_original_url: String,
    animation_url: String,
    animation_original_url: String,
    name: String,
    description: String,
    external_link: String,
    asset_contract: {
        created_date: String,
        owner: String
    },
    collection: {
        created_date: String,
        description: String
    }
    

    
    
    


})


const NFT = mongoose.model("NFT", NFTSchema)

module.exports = NFT