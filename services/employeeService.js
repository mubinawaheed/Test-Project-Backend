const fs = require('fs/promises');
const path = require('path');
const moment = require('moment');
const filePath = path.join(__dirname, '../data/employees.json');

const loadData = async () => {
    let data = await fs.readFile(filePath, 'utf-8');
    data = JSON.parse(data);
    return data
}

const getAverageSalary = async () => {
    const data = await loadData()
    let sum = data.reduce((sum, user) => user.salary + sum, 0);
    let avg = sum / data.length
    return avg
}

const getTopEarners = async (n) => {
    const data = await loadData()
    data.sort((a, b) => b.salary - a.salary);
    return data.slice(0, n)
}

const AverageSalaryByPosition = async () => {
    const data = await loadData();
    const distinctPositions = Array.from(new Set(data.map(obj => obj['position'])));
    const averageSalaries = []
    for (let i = 0; i < distinctPositions.length; i++) {
        let sum = 0;
        let count = 0;
        for (let j = 0; j < data.length; j++) {
            const element = data[j];
            if (element["position"] == distinctPositions[i]) {
                count += 1
                sum += element.salary
            }
        }
        let obj = {}
        obj.position = distinctPositions[i]
        obj.averageSalary = Math.ceil(sum / count)
        averageSalaries.push(obj)
    }
    return averageSalaries
}

const getEmployeesByExperience = async (low=0, high) => {
    const data = await loadData()
    const currentDate = moment(new Date())
    const filteredArray=[]

    for (let i = 0; i < data.length; i++) {
        const yearsOfExperience = currentDate.diff(moment(data[i].joiningDate), 'years')
        data[i].yearsOfExperience = yearsOfExperience
    
        if(yearsOfExperience >= low && yearsOfExperience <= high){
            filteredArray.push(data[i])
        }
    }
    return filteredArray
}

const getEmployeeBySalaryRange= async(low, high)=>{
    const data = await loadData()
    const filteredData  = data.filter((user => (user.salary>=low && user.salary<=high)))
    return filteredData
}

module.exports = {
    loadData,
    getAverageSalary,
    getTopEarners,
    AverageSalaryByPosition,
    getEmployeesByExperience,
    getEmployeeBySalaryRange
}