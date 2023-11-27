const employeeService = require('../services/employeeService')
const { sendResponse, sendResponseMsg } = require('../common')

const getData = async (req, res) => {
    try {
        const data = await employeeService.loadData()
        if (!data || data.length == 0) {
            return sendResponseMsg(res, "Data not found", false, 404)
        }
        return sendResponse(res, 200, { success: true, data: data })

    }
    catch (err) {
        console.error('Error occured:', err);
    }
}

const getAverageSalaryByPosition = async (req, res) => {
    try {
        const data = await employeeService.AverageSalaryByPosition()

        if (!data || data.length == 0) {
            return sendResponseMsg(res, "could not calculate the average.", false, 400)
        }
        return sendResponse(res, 200, { success: true, data: data })
    }
    catch (err) {
        console.error('Error occured:', err);
    }
}

const getEmployeesByExperience = async (req, res) => {
    try {
        const low = parseInt(req.query.low) || 0;
        const high = parseInt(req.query.high)

        if (!high || !low) {
            return sendResponseMsg(res, "Invalid query parameters", false, 400)
        }
        if (high < low) {
            return sendResponseMsg(res, "Invalid range of years", false, 400)
        }
        const data = await employeeService.getEmployeesByExperience(low, high)

        if (!data || data.length == 0) {
            return sendResponseMsg(res, "No employees in the given range.", false, 404)
        }
        return sendResponse(res, 200, { success: true, data: data })
    }
    catch (err) {
        console.error('Error occured:', err);
    }
}

const getEmployeesBySalary = async (req, res) => {
    try {
        const low = parseInt(req.query.low) || 0;
        const high = parseInt(req.query.high)

        if (!high || !low) {
            return sendResponseMsg(res, "Invalid query parameters", false, 400)
        }
        if (high < low) {
            return sendResponseMsg(res, "Invalid range of years", false, 400)
        }
        const data = await employeeService.getEmployeeBySalaryRange(low, high)

        if (!data || data.length == 0) {
            return sendResponseMsg(res, "No employees in the given range.", false, 404)
        }
        return sendResponse(res, 200, { success: true, data: data })
    }
    catch (err) {
        console.error('Error occured:', err);
    }
}

const getTopEarners = async (req, res) => {
    try {
        const numberOfTopEarners = parseInt(req.query.N) || 3;

        if (!numberOfTopEarners) {
            return sendResponseMsg(res, "total number Of Top Earners are required", false, 400)
        }

        const data = await employeeService.getTopEarners(numberOfTopEarners)

        if (!data || data.length == 0) {
            return sendResponseMsg(res, "No employees found.", false, 404)
        }
        return sendResponse(res, 200, { success: true, data: data })
    }
    catch (err) {
        console.error('Error occured:', err);
    }
}
module.exports = {
    getData,
    getAverageSalaryByPosition,
    getEmployeesByExperience,
    getTopEarners,
    getEmployeesBySalary
}