import React from "react";

const Temperature = ({data}) =>{
    //if (!data || !Array.isArray(data)) {return <div>No data available</div>;}
    return(
        <div>
            <h1>Dashboard_2</h1>
            <table border ="1">
                <thead>
                    <tr><td>Hour</td><td>Temperature</td></tr>
                </thead>
                <tbody>
                    {data.map((temp, index)=>(
                        <tr key={index}><td>Hour {index}</td><td>{temp.temperature}</td></tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Temperature;