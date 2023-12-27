const StylesForm = () => {
  const styleForm = 'mx-auto min-w-[300px] w-[300px] md:w-[400px] lg:w-[500px] h-auto  p-5 flex flex-col justify-start items-center gap-3 backdrop-blur-md backdrop-saturate-180 bg-[#5b7dad50] bg-opacity-80 border-2 rounded-md border-white border-opacity-20 overflow-hidden'
  const styleInput = 'w-full p-2 mb-4 border rounded outline-none '

  const styleButton = 'w-full bg-gradient-to-r from-green-500 via-green-700 to-blue-400 text-white rounded'
  const genericCard = 'flex flex-col justify-center items-start gap-1 backdrop-blur-md backdrop-saturate-180 bg-[#5b7dad50] bg-opacity-80 border-2 rounded-md border-white border-opacity-30 overflow-hidden  text-slate-200'

  const genericCard2 = 'bg-[#a5cc82] border-2 flex flex-col justify-center items-start gap-1 backdrop-blur-md  backdrop-saturate-180  bg-opacity-80 rounded-md border-white border-opacity-30 overflow-hidden  text-slate-600'

  return {
    styleForm,
    styleInput,
    styleButton,
    genericCard,
    genericCard2
  }
}

export default StylesForm
