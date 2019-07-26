const TechSpecs = require('./index')


const getByID = (_id) => {
    return TechSpecs.findById(_id)
}

const addTechSpec = (techspec) => {
    return TechSpecs.create(techspec)
}

const deleteTechSpec = () => {
    return TechSpecs.findByIdAndRemove(_id)
}

const updateTechSpec = (_id,update) => {
    return TechSpecs.findByIdAndUpdate(_id,update)
}

module.exports = {
    getAll,
    addTechSpec,
    deleteTechSpec,
    updateTechSpec
}