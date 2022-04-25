import Link from 'next/link'
import style from '../common/style/table.module.css'

const Table = ({data}) => (
    <table className={style.table}>
        <thead>
            <tr className={style.tr}>
                <th className={style.td}> ### Todo 리스트 ### </th>
            </tr>
        </thead>
        <tbody>
        { data.length == 0 ? <tr className={style.tr}>
                                    <td className={style.td}>일정이 없습니다.</td>
                                    </tr>
            :data.map((todo) => (
                <tr className={style.tr} key={todo}>
                    <td className={style.td}>
                        <input type="checkbox"/>
                        <a>{todo}</a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>          
)

export default function TodoList(){
    const data = ["정처기 공부 하기", "운동 하기"]
    const count = data.length
    return(<>
        <h1>스케줄 목록</h1>
        <h3>총 스케줄: { count }개</h3>
        <div className={style.td}>
            <Table data={data}/>
        </div>
        </>)
}