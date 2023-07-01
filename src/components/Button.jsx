import React from 'react';

const Button = ({cont, src}) => {
  return (
    <div className="min-w-[5px] cursor-pointer py-4 max-h-2 max-w-[150px] overflow-hidden flex items-center bg-[#222623] hover:bg-slate-700 p-4 rounded-md border-violet-500 border-[2px]">
      <img
        src={src}
        alt="Card "
        className="w-6 h-6 rounded-full object-cover mr-2"
      />
      <div>
        <p className="text-sm text-white font-semibold">{cont} </p>
      </div>
    </div>
  );
};

export default Button;
