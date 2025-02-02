import { faSearch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InputSearch = ({handleResetText, ...props}) => {
  
  return (
    <div className="
      relative
      px-[50px] 
      py-[10px] 
      border 
      border-slate-300 
      hover:border-blue-500 
      rounded-md 
      hover:shadow-sm
      hover:shadow-blue-50
      w-full
    ">
      <div className="
        absolute
        left-[20px]
        text-slate-600
      ">
        <FontAwesomeIcon icon={faSearch}/>
      </div>
      <input 
        className={`
          outline-none
          w-full  
          ${props.disabled ? 'cursor-not-allowed bg-white' : ''}
        `}
        type="text" 
        placeholder="Search..."
        {...props}
      />
      
      {props.value.length > 0 &&
        <button 
          className="
            absolute
            right-[20px]
            text-slate-600
          "
          onClick={handleResetText}
        >
          <FontAwesomeIcon icon={faCircleXmark}/>
        </button>
      }
    </div>
  );
}

export default InputSearch;
