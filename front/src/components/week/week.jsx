import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export const Week = () => {
    const date = new Date().toLocaleDateString()
    const arr = ['일', '월', '화', '수', '목', '금', '토']
    const [dates, setDates] = useState([])
    const [select, setSelect] = useState([{id: 0, bool: false}, {id: 1, bool: false}, {id: 2, bool: false}, {id: 3, bool: false}, {id: 4, bool: false},
      {id: 5, bool: false}, {id: 6, bool: false}, {id: 7, bool: false}])
    const navigate = useNavigate()
    function calc() {
      let i = 0
      let result = []
      let today = Date.parse(date)
      for(i=0; i<7; i++){
        today = today + 86400000
        result.push(new Date(today))
      }
      setDates(result)
    }
    function datess(num){
      let result = []
      for(let j = 0; j < select.length; j++){
        if(select[j].id == num){
          if(select[j].bool == true){
            result.push({id: select[j].id, bool: false})
          }else {
            result.push({id: select[j].id, bool: true})
          }
        } else {
          result.push({id: select[j].id, bool: select[j].bool})
        }
      }
      setSelect(result)

    }
    useEffect(() => {
        calc()
    }, [])
    useEffect(() => {
      console.log(select)
    }, [select])
    return (
      <div className="w-full max-h-96">
          <div className="w-[95%] h-[40rem] bg-white mx-auto rounded-lg border border-black">
            <div className="w-fit mx-auto font-do text-4xl font-bold pt-10">7월 셋째주</div>
            <div className="flex">
                {dates.map((date, index) => (<div onClick={() => datess(index+1)} className={"w-28 h-28 mt-[7rem] rounded-lg m-auto " + (select.map((sel) => (sel.id == index+1 ? sel.bool? " bg-[#FFFFD2] " : " bg-[#AFEEEE] hover:bg-[#FFFFD2] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" : "")) )}>
                  <p className="text-center h-full font-bold font-do items-center justify-center flex">{date.getMonth()+1}/{date.getDate()}<br/>{arr[date.getDay()]}</p>
                  </div>))}
            </div>
            <div className="w-fit mx-auto font-do text-2xl font-bold pt-20">어느 요일이 편해?(중복 선택 가능)</div>
            <div className="w-24 h-6 rounded-lg bg-[#AFEEEE] m-auto flex mt-10 items-center justify-center py-5 cursor-pointer" onClick={() => navigate('/day', {state: {dt: select}})}>선택 완료</div>
          </div>
  
      </div>
    )
}
