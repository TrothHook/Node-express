

const getAllTasks = (req, res) => {
    res.send(`Get all the tasks`);
}

const createTask = (req, res) => {
    res.json(req.body);
}
const getSingleTask = (req, res) => {
    res.json({id:req.params.id});
}
const updateTask = (req, res) => {
    res.send(`Edit a task`);
}
const deleteTask = (req, res) => {
    res.send(`Delete a task`);
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};