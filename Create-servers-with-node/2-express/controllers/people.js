
// come up with a name for the funciton. and then cut and paste the callback function written inside the get method (all the methods) in people.js in the routes folder

let { products, people } = require("../data");

const getPerson = (req, res) => {
    res.status(200).json({success: true, data: people});
}


const createPerson = (req, res) => {
    const {name} = req.body;

    if(!name) {
        return res.status(404).json({success:false, msg: `please provide name value`});
    }

    res.status(201).json({success: true, person:name});
}


const createPersonPostman = (req, res) => {

    const {name} = req.body;

    if(!name) {
        return res.status(404).json({success:false, msg:"please provide a valid name"});
    }

    res.status(201).json({success: true, data:[...people, name]});

}


const updatePerson = (req, res) => {

    const {id} = req.params;

    const {name} = req.body;

    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res.status(404).json({success:false, msg:`no person with id ${id}`});
    }

    const newPerson = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }

        return person
    })

    res.status(200).json({success:true, data:newPerson});

}


const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res.status(404).json({success:false, msg:`no person with id ${req.params.id}`});
    }

    const newPerson = people.filter((person) => person.id !== Number(req.params.id));

    return res.status(200).json({success:true, data:newPerson});

}


module.exports = {
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}