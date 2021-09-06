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

router.get("/gallery", (req, res) => {

    NFT.find({})
    .then(nfts => {
    res.render('./nftmarketplace/gallery', {nfts})
    })
    .catch(console.error);
})
//----------------------------------------------------------

//-----------------------------------------------------------

// Create Route ---------------------------
router.get('/new', (req, res) => {
    // No Database action here
    res.render('./nftmarketplace/new') //no info passing in here
})

router.post('/', (req, res) => {
    
    console.log(req.body)

    NFT.create(req.body)
        .then( nfts => {
            res.redirect('./nftmarketplace/gallery')
        })
        .catch(console.error)
})
router.get('/:id', (req, res) => {
    
    console.log(`params ID: ${req.params.id}`)
    NFT.findById(req.params.id)
        .then( nfts => {
            res.render('./nftmarketplace/show', nfts)
        })
        .catch(oopsie => {
            console.error("oops")
            res.send("something has gone terribly wrong!")
        })
})
module.exports = router