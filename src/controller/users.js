const UserModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }


}

const createNewUser = async (req, res) => {
    const {body} = req
    try {
        await UserModel.createNewUser(body)
        res.json({
            message: 'CREATE new users success',
            data: body
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params
    const {body} = req

    try {
        await UserModel.updateUser(body, id)
        res.json({
            message: 'UPDATE user Success',
            data: {
                id: id,
                ...body
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params


    try {
        await UserModel.deleteUser(id)
        res.json({
            message: 'DELETE user Success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports ={
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}