import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewemp = () => {
    const [emp, Newemp] = useState(
        {
            "status": "success",
            "data": [],
            "message": "Successfully! All records has been fetched."
        }
    )
    const fetchData = () => {
        axios.get("https://dummy.restapiexample.com/api/v1/employees").then(
            (req) => {
                Newemp(req.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                emp.data.map(
                                    (value, index) => {
                                        return (
                                            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                                <div class="card">
                                                    <div class="card-header">
                                                        {value.id}
                                                    </div>
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">{value.employee_name}</li>
                                                        <li class="list-group-item">{value.employee_salary}</li>
                                                        <li class="list-group-item">{value.employee_age}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewemp
