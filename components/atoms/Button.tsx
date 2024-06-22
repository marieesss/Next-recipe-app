import React from 'react'

interface ButtonProps {
  text: string;
  handleClick: () => Promise<void>;
}


const CustomButton : React.FC<ButtonProps>= ({text, handleClick}) => {
  return (
    <div>
      <button
      onClick={handleClick}
       className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
      >
{text}
</button>
    </div>
  )
}

export default CustomButton
