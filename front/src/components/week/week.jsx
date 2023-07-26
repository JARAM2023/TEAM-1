import { useEffect, useState } from "react"

export const Week = () => {
    const date = new Date().toLocaleDateString()
    const arr = ['일', '월', '화', '수', '목', '금', '토']
    const [dates, setDates] = useState([])
    const [select, setSelect] = useState(0)

    // for(var i=0; i<7; i++){
    //   setToday(today + 86400000)
    //   setDates([...dates, new Date(today)])
    // }
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
                {dates.map((date, index) => (<div onClick={() => setSelect(index+1)} className={"w-28 h-28 mt-[7rem] rounded-lg m-auto" + (index+1 == select ? " bg-[#FFFFD2]" : " bg-[#AFEEEE] hover:bg-[#FFFFD2] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300")}>
                  <p className="text-center h-full font-bold font-do items-center justify-center flex">{date.getMonth()}/{date.getDate()}<br/>{arr[date.getDay()]}</p>
                  </div>))}
            </div>
            <div className="w-fit mx-auto font-do text-2xl font-bold pt-20">어느 요일이 편해?(중복 선택 가능)</div>
            <div className="w-24 h-6 rounded-lg bg-[#AFEEEE] m-auto flex mt-10 items-center justify-center py-5 cursor-pointer">선택 완료</div>
          </div>
  
      </div>
    )
  }