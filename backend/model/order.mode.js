module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define('ord77',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        status: {
            type: Sequelize.INTEGER
        },
        order_no: {
            type: Sequelize.INTEGER
        },
        simbol: {
            type: Sequelize.STRING
        },
        simbol_type: {
            type: Sequelize.STRING
        },
        market: {
            type: Sequelize.STRING
        },
        ef_time: {
            type: Sequelize.DATE
        },
        side: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.DOUBLE
        },
        volum: {
            type: Sequelize.INTEGER
        },
        order_term: {
            type: Sequelize.INTEGER
        },
        ticket: {
            type: Sequelize.INTEGER
        },
        update_type: {
            type: Sequelize.INTEGER
        },
        update_time: {
            type: Sequelize.DATE
        },
        trader: {
            type: Sequelize.STRING
        },
        internal_account: {
            type: Sequelize.INTEGER
        },
        cant_exec: {
            type: Sequelize.INTEGER
        },
        order_no: {
            type: Sequelize.INTEGER
        }
    });
    return Orders;
}