
// const Task = require("../models/task");

// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({});

//         res.status(200).json({ tasks });
//         // res.status(200).json({ tasks, amount:tasks.length });
//         // res.status(200).json({success:true, data: {tasks, nbHits:tasks.length}});
//         // res.status(200).json({status:"success", data: {tasks, nbHits:tasks.length}});

//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// }


// const createTask = async (req, res) => {

//     try {
//         const task = await Task.create(req.body);
//         res.status(201).json({ task });

//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }

// }


// const getSingleTask = async (req, res) => {

//     try {
//         const { id: taskID } = req.params
//         const singleTask = await Task.findOne({ _id: taskID });

//         if (!singleTask) {
//             return res.status(404).json({ msg: `No task with id: ${taskID}` });
//         }

//         res.status(200).json({ singleTask });

//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }

// }


// const deleteTask = async (req, res) => {

//     try {

//         const { id: taskID } = req.params;
//         const task = await Task.findOneAndDelete({ _id: taskID });

//         if (!task) {
//             return res.status(404).json({ msg: `No task with id: ${taskID}` });
//         }
//         // res.status(200).json({ task });
//         // res.status(200).json({ task:null, status: success });
//         res.status(200).send();

//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// }


// const updateTask = async (req, res) => {

//     try {

//         const {id:taskID} = req.params;

//         const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true,runValidators:true,});

//         if(!task) {
//             return res.status(404).json({msg: `No task with id: ${taskID}`});
//         }

//         res.status(200).json({task});

//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// }

// // PUT method

// // const editTask = async (req, res) => {

// //     try {

// //         const {id:taskID} = req.params;

// //         const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
// //             new:true,
// //             runValidators:true,
// //             overwrite:true
// //         });

// //         if(!task) {
// //             return res.status(404).json({msg: `No task with id: ${taskID}`});
// //         }

// //         res.status(200).json({task});

// //     } catch (error) {
// //         res.status(500).json({ msg: error });
// //     }

// // }


// module.exports = {
//     getAllTasks,
//     createTask,
//     getSingleTask,
//     updateTask,
//     deleteTask
// };

// ****************************************************

// With Asynchronous wrapper

const Task = require("../models/task");

const asyncWrapper = require("../middleware/async");

const { createCustomError } = require("../errors/custom-error");


const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});


const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json({ task });

});


const getSingleTask = asyncWrapper(async (req, res, next) => {

    const { id: taskID } = req.params
    const singleTask = await Task.findOne({ _id: taskID });

    if (!singleTask) {

        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }

    res.status(200).json({ singleTask });

});

const deleteTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }
    res.status(200).send();
});


const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true, });

    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }

    res.status(200).json({ task });
});

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};