module.exports= (sequelize,Sequelize)=>{
    const Todo = sequelize.define("todo",{
        task:{
            type:Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        done:{
            type: Sequelize.BOOLEAN
        }
    })
    return Todo;
}