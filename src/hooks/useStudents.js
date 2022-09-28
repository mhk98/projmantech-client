import { useEffect, useState } from "react"

const useStudents = () =>{

    //Context API
    
    const [students, setStudents] =useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/student')
        .then(res=>res.json())
        .then(data =>setStudents(data))
    }, [students])

    return [students, setStudents]
}

export default useStudents