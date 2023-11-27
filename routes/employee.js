const employeeController = require('../controllers/employees')
const express = require("express");
const router = express.Router();

router.get('/data', employeeController.getData)
router.get('/filter-by-experience', employeeController.getEmployeesByExperience)
router.get('/filter-by-salary', employeeController.getEmployeesBySalary)
router.get('/get-average-salaries', employeeController.getAverageSalaryByPosition)
router.get('/top-earners', employeeController.getTopEarners)



module.exports=router;