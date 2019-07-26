const TechSpecs = require('./index')


const getAll = () => {
    return TechSpecs.find({})
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