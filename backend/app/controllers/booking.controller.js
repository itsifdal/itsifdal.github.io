const db        = require("../models");
const Booking   = db.booking;
const Op        = db.Sequelize.Op;

// Create and Save a new Booking
exports.create = (req, res) => {
    // Validate request
    if (!req.body.kode_ruangan) {
        res.status(400).send({
            message: "Content can not be empSDty!"
        });
        return ;
    }
    // Tambah booking
    const booking = {
        kode_ruangan: req.body.kode_ruangan,
        id_user:  req.body.id_user,
        no_booking: req.body.no_booking,
        agenda: req.body.agenda,
        date: req.body.date,
        time_start: req.body.time_start,
        time_end: req.body.time_end
    };

    // Save ke database
    Booking.create(booking)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error Tambah booking."
            })
        });
};

//Retrieve all Bookings from the database.
exports.getAll = (req, res) => {
    const id_booking = req.query.id_booking;
    let condition = id_booking ? { id_booking: { [Op.like]: `%${id_booking}%` } } : null;

    Booking.findAll({ where: condition })
        .then((data) => {
            res.send({
                success: true,
                message: 'List booking ditampilkan',
                data: data
            });
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Eror Menampilkan Data booking"
            });
        });
};

// exports.getBookingJoin2 = (req, res) => {
//     const id_booking = req.query.id_booking;
//     let condition = id_booking ? { id_booking: { [Op.like]: `%${id_booking}%` } } : null;

//     Booking.findAll({ where: condition })
//         .then((data) => {
//             res.send({
//                 success: true,
//                 message: 'List booking ditampilkan',
//                 data: data
//             });
//         }).catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || "Eror Menampilkan Data booking"
//             });
//         });
// };

// Find a single Booking with an id
exports.findOne = (req, res) => {
    const kode_booking = req.params.kode_booking;

    Booking.findByPk(kode_booking)
        .then((data) => {
            res.send({
                success: true,
                message: 'Data berhasil di tampilkan',
                data: data
            });
        }).catch((err) => {
            res.status(500).send({
                message: "Error retrieving Booking with id=" + kode_booking
            });
        });
};

// Update a Booking by the id in the request
exports.update = (req, res) => {
    const id_booking = req.params.id_booking;

    Booking.update(req.body, {
        where: { id_booking: id_booking }
    }).then((result) => {
        if ( result == 1 ) {
            res.send({
                message: "Booking was updated successfully"
            });
        } else {
            res.send({
                message: `Cannot update Booking with kode=${kode_booking}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating booking with kode=" + kode_booking
        })
    });
};

// Delete a Booking with the specified id in the request
exports.delete = (req, res) => {
    const kode_booking = req.params.kode_booking;
    alert('kode_booking');

    Booking.destroy({
        where: { kode_booking: kode_booking }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "booking dihapus"
            })
        } else {
            res.send({
                message: `Cannot delete Booking with kode=${kode_booking}`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Could not delete Booking with kode=" + kode_booking
        })
    });
};