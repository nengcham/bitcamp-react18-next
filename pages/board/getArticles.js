import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../common/style/table.module.css'

const Table = ({columns, colspan, data}) => {
    return(
        <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                {columns.map((column)=>
                    <th key = {column.passengerId} className={styles.td}>{column}</th>
                )}
                </tr>
            </thead>
            <tbody>
                { data.length == 0 ? <tr>
                    <td colSpan={colspan} className={styles.td}>데이터가 없습니다.</td>
                                    </tr>
                :data.map((board) => (
                    <tr className={styles.tr} key={board.passengerId}>
                        <td className={styles.td}>{board.passengerId}</td>
                        <td className={styles.td}>{board.name}</td>
                        <td className={styles.td}>{board.teamId}</td>
                        <td className={styles.td}>{board.subject}</td>
                    </tr> 
                ))}
            </tbody>
        </table>
    )
}

export default function BoardList(){
    const columns = ["passengerId","name","teamId","subject"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/board/list')
        .then(res => {setData(res.data.boards)})
        .catch(err => {})
    },[])
    return(<>
        <h1>게시판 목록</h1>
        {count != 0 && <h3>총 게시글 수 : {count}</h3>}
        <div className={styles.td}>
            <Table columns={columns} colspan={columns.length} data={data}></Table>
        </div>
    </>)
}