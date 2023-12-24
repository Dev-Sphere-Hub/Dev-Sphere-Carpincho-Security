const StylesForm = () => {
  const styleForm = 'mx-auto min-w-[300px] w-[300px] md:w-[400px] lg:w-[500px] h-auto  p-5 flex flex-col justify-start items-center gap-3 backdrop-blur-md backdrop-saturate-180 bg-[#5b7dad50] bg-opacity-80 border-2 rounded-md border-white border-opacity-20 overflow-hidden'
  const styleInput = 'w-full p-2 mb-4 border rounded outline-none '

  const styleButton = 'w-full bg-gradient-to-r from-green-500 via-green-700 to-blue-400 text-white rounded'

  return {
    styleForm,
    styleInput,
    styleButton
  }
}

export default StylesForm
