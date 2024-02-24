import express from "express";
import {getAllJobs,postJob,getMyJobs,updateJob,deleteJob, getSingleJob} from "../controllers/jobController.js";
import {isAuthenticated} from "../middlewares/auth.js";

const router=express.Router();
router.get("/getAllJobs",getAllJobs);
router.post("/postJob",isAuthenticated,postJob);
router.get("/getMyJobs",isAuthenticated,getMyJobs);
router.put("/updateJob/:id",isAuthenticated,updateJob);
router.delete("/deleteJob/:id",isAuthenticated,deleteJob);
router.get("/:id",isAuthenticated,getSingleJob);
export default router;