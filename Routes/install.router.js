import express from 'express'
import sequelize from '../Config/sequelize.config.js'

// Core Models
import UserModel from '../Core/Models/user.model.js'
import GroupModel from '../Core/Models/group.model.js'
import OrgModel from '../Core/Models/org.model.js'

// App Models
import Sections from '../App/Models/section.model.js'
import Categories from '../App/Models/category.model.js'
import Types from '../App/Models/type.model.js'
import News from '../App/Models/news.model.js'
import Images from '../App/Models/image.model.js'
import Reviews from '../App/Models/review.model.js'
import SeedController from '../Core/Controllers/seed.controller.js'

const InstallRouter = express.Router()

InstallRouter.get('/install', async (req, res) => {
	const seeder = new SeedController() 
	try {
		await sequelize.sync({ force: true })
		await seeder.seed_from_csv()
		res.sendStatus(200)
	}
	catch(err) {
		res.send(err)
	}
})

export default InstallRouter