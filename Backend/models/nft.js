const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const  NFTSchema = new Schema({
assetid: Number,
cryptoid: String,
display_background: String,
main_image: String,
mainimg_backup: String,
smallmain_img: String,
animation_url: String,
animation_original_url: String,
asset_name: String,
asset_description: String,
external_link: String,
opensea_link: String,
})


const NFT = mongoose.model("NFT", NFTSchema)

module.exports = NFT