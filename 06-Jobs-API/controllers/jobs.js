const Job = require("../models/jobs");
const {StatusCodes} = require("http-status-codes");
const {BadRequestError, NotFoundError} = require("../errors/index");

const getAllJobs = async (req, res) => {
    res.send(`get all jobs`);
}
const getJob = async (req, res) => {
    res.send(`get job`);
}
const createJob = async (req, res) => {
    // At the moment, we are missing the user -> where is the user located? It is located in the req.user -> And what are we really looking for is the that user's id
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.json(req.body);
}
const updateJob = async (req, res) => {
    res.send(`update job`);
}
const deleteJob = async (req, res) => {
    res.send(`delete job`);
}



module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}