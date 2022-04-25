import axios from "axios"
import React, { useState } from "react"

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState("")
    const {num1, opcode, num2} = inputs

    const handleChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(inputs))
        axios.post('http://localhost:5000/api/basic/calc', inputs)
        .then(res=>{
            const calc = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>${calc.num1} ${calc.opcode} ${calc.num2} = ${calc.compute}</h3>
            `
        })
    }

    return <>
        <h1>Calculator</h1>
        <form action="" onSubmit={handleSubmit}>
        <label><b>Num1</b></label>
        <input type="text" name="num1" onChange={handleChange}/><br />

        <label><b>Opcode</b></label>
        <select type="text" name="opcode" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select>
        <br />
        <label><b>Num2</b></label>
        <input type="text" name="num2" onChange={handleChange}/><br />
        <input type="submit" value="계산"/>
        </form>
        <div>계산결과: <span id="result-span"></span></div>
    </>
}
