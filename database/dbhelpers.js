const TechSpecs = require('./index')


const getByID = (id) => {
    return TechSpecs.findById(_id)
}

const addTechSpec = (techspec) => {
    return TechSpecs.create(techspec)
}

const deleteTechSpec = () => {
    return TechSpecs.findByIdAndRemove(id)
}

const updateTechSpec = (_id,update) => {
    return TechSpecs.findByIdAndUpdate(id,update)
}

module.exports = {
    getByID,
    addTechSpec,
    deleteTechSpec,
    updateTechSpec
}