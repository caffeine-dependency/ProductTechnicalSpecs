const {TechSpec} = require('./index')


const getByID = ({id}) => {
    return TechSpec.find({id})
}

const addTechSpec = ({techspec}) => {
    return TechSpec.create({techspec})
}

const deleteTechSpec = ({id}) => {
    return TechSpec.deleteOne({id})
}

const updateTechSpec = ({id,update}) => {
    return TechSpec.findByIdAndUpdate(id,update)
}

module.exports = {
    getByID,
    addTechSpec,
    deleteTechSpec,
    updateTechSpec
}