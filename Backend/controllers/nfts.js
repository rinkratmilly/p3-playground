const express = require('express')
const router = express.Router()

// Model Import

const NFT = require('../models/nft')
//-----------------------------------------------------------------------------------------------------------------

// CRUD ROUTES BELOW:

router.get("/", (req, res) => {

    NFT.find({})
    .then(nfts => {
    res.render('./nftmarketplace/index', {nfts})
    })
    .catch(console.error);
})

module.exports = router