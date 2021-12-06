const express = require('express')
const router = express.Router()



router.get('/', (req, res)=>{
	console.log("Hello Risasi")
	res.send('User List')
})

router.post('/', (req, res)=>{
	console.log("Post Hello Risasi")
	res.send('Create New User')
})


router.get('/new', (req, res)=>{
	console.log(" New Hello Risasi")
	res.send('User New Form')
})
router
.route('/:id')
.get((req, res)=>{
	res.send(`Get user with ID:${req.params.id}`)
})
.post((req, res)=>{
	console.log("Post Hello Risasi")
	res.send('Create New User')
})
.put((req, res)=>{
	console.log(" Update User with ID:")
	res.send(`Update user with an id:${req.params.id}`)
})
.delete((req, res)=>{
	console.log(" Delete User  with ID:")
	res.send(`Delete user with an id:${req.params.id}`)
})

router.param('id', (req, res, next, id)=>{
	console.log(id)
	next()
})










module.exports = router

