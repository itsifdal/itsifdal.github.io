module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
        id_booking: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        kode_ruangan: {
            type: Sequelize.STRING
        },
        id_user: {
            type: Sequelize.STRING
        },
        no_booking: {
            type: Sequelize.STRING
        },
        agenda: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },
        time_start: {
            type: Sequelize.STRING
        },
        time_end: {
            type: Sequelize.STRING
        }
    });
    return Booking;
}