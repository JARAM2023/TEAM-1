import { useEffect, useState } from "react"

export const Day = () => {
    const [data, setData] = useState([])
    const [datas, setDatas] = useState([])
    useEffect(() => {
        let result = []
        for(let i = 0; i < 17; i++){
            result.push({id: (i+9)%24, state: 0})
        }
        setData(result)
        
    }, [])
    useEffect(() => {
        let result = []
        setDatas([])
        result.push(data)
        result.push(data)
        console.log(result)
        setDatas(result)
    }, [data])
    function datasss(id, state, index, index2) {
        let result = []
        for(let i = 0; i < datas.length; i++){
            let result2 = []
            for(let j = 0; j < datas[i].length; j++){
                if(i == index && j == index2){
                    if(state == 0){
                        result2.push({id: id, state: 1})
                    } else if(state == 1){
                        result2.push({id: id, state: 2})
                    } else if(state == 2){
                        result2.push({id: id, state: 0})
                    } 
                } else {
                    result2.push({id: datas[i][j].id, state: datas[i][j].state})
                }
            }
            result.push(result2)
        }
        setDatas(result)
    }
    console.log(datas)
    return (
      <div className="w-full max-h-96">
          <div className="relative w-[95%] h-[45rem] bg-white mx-auto rounded-lg border border-black">
            <div className="flex justify-center">
                <div className="font-do text-4xl font-bold pt-10">스케줄</div>
            </div>
            <div className="absolute top-[5%] right-[10%] space-x-4 float-right flex">
                <div className="w-12 h-12 font-do bg-[#AFEEEE] flex justify-center items-center">선호</div>
                <div className="w-12 h-12 font-do bg-[#FFFFD2] flex justify-center items-center text-center">조금 무리</div>
                <div className="w-12 h-12 font-do bg-[#F4C2C2] flex justify-center items-center">불가</div>
            </div>
            <div className="flex justify-center"> 
                {datas.map((data1, index) => (
            <div className="flex-none mx-10 mt-5">
                {index == 0? <div className="font-bold"> 7/29 토 </div>: <div className="font-bold"> 7/30 일 </div>}
            
            {data1.map((dat, index2) => (
            <div className="flex">
                    <p className="w-6">{dat.id}</p>
                    <div className={"ml-2 mb-1 w-16 h-6 rounded-lg cursor-pointer" + (dat.state == 0? " bg-[#F4C2C2]": dat.state == 1? " bg-[#FFFFD2]": dat.state == 2? " bg-[#AFEEEE]":"")} onClick={() => datasss(dat.id, dat.state, index, index2)}></div>
            </div>
                ))}
                </div>
                ))}
                </div>
            <div className="w-24 h-6 rounded-lg bg-[#AFEEEE] m-auto flex mt-10 items-center justify-center py-5 cursor-pointer">선택 완료</div>
          </div>
  
      </div>
    )
}
