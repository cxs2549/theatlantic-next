import React from "react"

const HomeLayout = () => {
  return (
    <div className="mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr,2fr,1fr] gap-3 mb-3">
        <div className=" flex flex-col gap-3">
            <div className="w-full h-[285px] border">hocus</div>
            <div className="w-full h-[285px] border">frog</div>
        </div>
        <div className="border ">hero</div>
        <div className=" flex flex-col gap-3">
            <div className="border  flex-1">1</div>
            <div className="border  flex-1">2</div>
            <div className="border  flex-1">3</div>
            <div className="border  flex-1">4</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-3">
        <div className=" grid grid-cols-4 gap-3">
            <div className="border h-[285px]">1</div>
            <div className="border h-[285px]">2</div>
            <div className="border h-[285px]">3</div>
            <div className="border h-[285px]">4</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className=" grid grid-cols-2 gap-3">
            <div className="border h-[233px]">1</div>
            <div className=" grid grid-cols-2 gap-3">
                <div className="border">1</div>
                <div className="border">2</div>
                <div className="border">3</div>
                <div className="border">4</div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default HomeLayout
