const Complaint = require("../models/Complaint");

const createComplaint = async (req, res) => {
    try {

        const complaint = await Complaint.create({

    citizenId: req.body.citizenId,

    ticketId:
    "CFX-" +
    Date.now(),

    title: req.body.title,

    description: req.body.description,

    category: req.body.category,

    location: req.body.location,

    image: req.file
        ? req.file.filename
        : ""

});


        res.status(201).json({
            message: "Complaint Submitted Successfully",
            complaint
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find()
        .populate("assignedTo", "name email");

        res.json(complaints);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getOfficerComplaints = async (req, res) => {
    try {

        const complaints = await Complaint.find({
            assignedTo: req.params.id
        }).populate("assignedTo", "name email");

        res.json(complaints);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const updateComplaintStatus = async (req, res) => {
    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
                remarks: req.body.remarks
            },
            { new: true }
        );

        res.json({
            message: "Status Updated Successfully",
            complaint
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const deleteComplaint = async (req, res) => {
    try {

        await Complaint.findByIdAndDelete(req.params.id);

        res.json({
            message: "Complaint Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const assignComplaint = async (req, res) => {
    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            {
                assignedTo: req.body.officerId
            },
            { new: true }
        );

        res.json({
            message: "Complaint Assigned Successfully",
            complaint
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const updatePriority = async (req, res) => {

    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            {
                priority: req.body.priority
            },
            { new: true }
        );

        res.json({
            message: "Priority Updated Successfully",
            complaint
        });

    } catch(error){

        res.status(500).json({
            message: error.message
        });

    }
};

const getCitizenComplaints =
async(req,res)=>{

    try{

        const complaints =
await Complaint.find({
    citizenId:req.params.id
})
.populate(
    "assignedTo",
    "name email"
);

        res.json(
            complaints
        );

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

module.exports = {
    createComplaint,
    getComplaints,
    getOfficerComplaints,
    updateComplaintStatus,
    deleteComplaint,
    assignComplaint,
    updatePriority,
    getCitizenComplaints
};