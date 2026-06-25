const express = require("express");
const router = express.Router();

const {
    createComplaint,
    getComplaints,
    getOfficerComplaints,
    updateComplaintStatus,
    deleteComplaint,
    assignComplaint,
    updatePriority,
    getCitizenComplaints
} = require("../controllers/complaintController");

const upload = require("../middleware/upload");

router.get("/", (req, res) => {
    res.send("Complaint Route Working");
});
router.get("/all", getComplaints);
router.get(
    "/officer/:id",
    getOfficerComplaints
);
router.get(
    "/citizen/:id",
    getCitizenComplaints
);
router.put("/update/:id", updateComplaintStatus);
router.put(
    "/assign/:id",
    assignComplaint
);
router.delete("/delete/:id", deleteComplaint);
router.post(
    "/create",
    upload.single("image"),
    createComplaint
);

router.put(
    "/priority/:id",
    updatePriority
);


module.exports = router;