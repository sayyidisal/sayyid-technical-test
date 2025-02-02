/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import InputSearch from './InputSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Dropdown = ({
  id,
  multiple = true,
  renderOption = true,
  withSearch = true,
  options = [],
  portal = false,
  outlined = false,
  zIndex= 1000,
  optionLabel = 'Dropdown'
}) => {
  const portalRef = useRef(document.createElement('div'));
  const divRef = useRef(null)

  const [values, setValues] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [divHeight, setDivHeight] = useState(0)

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef?.current?.offsetHeight);
    }
  }, [divRef.current?.offsetHeight]);

  useEffect(() => {
    const node = portalRef.current;

    if (portal) {
      document.body.appendChild(node);
      return () => {
        document.body.removeChild(node);
      };
    }
  }, [portal]);

  const handleDeleteValue = (id) => {
    setValues(prev => prev.filter(item => item.id !== id))
  }

  const handleSelectedValue = (value) => {
    if(!multiple) {
      setValues([value])
      setIsOpen(false)
      return;
    }
    setValues(prev => ([...prev, value]))
  }

  const dropdownContent = (
    <div 
      style={{'zIndex': zIndex, 'top': divHeight + 6}}
      className="
        absolute 
        bg-white
        w-full
        border 
        border-slate-300
        left-0
        rounded-md 
        flex 
        flex-col
        gap-[10px]
      "
    >
      {withSearch &&
        <InputSearch 
          onChange={e => setSearchText(e.target.value)}
          value={searchText}
          handleResetText={() => setSearchText('')}
          disabled={outlined}
        />
      }
      <Lists 
        data={options} 
        values={values} 
        searchText={searchText}
        renderOption={renderOption}
        outlined={outlined}
        handleSelected={handleSelectedValue}
      />
    </div>
  )

  return (
    <div className="flex w-full">
      <label className="w-[20%] pt-[8px]" htmlFor={id}>{optionLabel}</label>
      <div className='relative grow'>
        <div 
          ref={divRef}
          id={id}
          className={`
            relative 
            py-[8px]
            min-h-[44px]
            pl-[20px] 
            pr-[50px] 
            border 
            border-slate-300 
            hover:border-blue-500 
            rounded-md 
            hover:shadow-sm 
            hover:shadow-blue-50 
            w-full 
            flex 
            items-center 
            ${outlined 
              ? 'bg-slate-50 cursor-not-allowed' 
              : 'bg-white: cursor-pointer'
            }
          `}
          onClick={() => setIsOpen(prev => !prev)}
        >
          {values.length > 0 ?
            <div className="flex items-center gap-[6px] flex-wrap">
            {
              values.map(value => 
                multiple ? 
                <Tag 
                  key={value.id} 
                  handleDelete={(e) => {
                    e.stopPropagation()
                    handleDeleteValue(value.id)
                  }}
                >
                  {value.label}
                </Tag> : value.label
                
              )
            }
            </div> :
            <div className="text-slate-400">Select club...</div>
          }
          <div className="absolute right-[20px] text-slate-600 text-[14px]">
            {isOpen 
              ? <FontAwesomeIcon icon={faChevronUp}/>
              : <FontAwesomeIcon icon={faChevronDown}/>
            }
          </div>
        </div>
        {isOpen && 
          (portal 
            ? ReactDOM.createPortal(dropdownContent, portalRef.current) 
            : dropdownContent
          )
        }
      </div>
    </div>
  );
}


const Lists = ({data, values, searchText, renderOption, outlined, ...props}) => {

  const findValue = (text) => {
    return values.find(value => value.label === text)
  }

  const handleSelected = (value) => {
    if(findValue(value.label) || outlined) return;
    props.handleSelected(value)
  }

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-green-300">{part}</span>
      ) : (
        part
      )
    );
  };

  const filterLists = (data, searchText) => {
    if (!searchText) {
      return data;
    }
    return data.filter(item => item.label?.toLowerCase().includes(searchText?.toLowerCase()));
  };

  const filteredLists = filterLists(data, searchText);

  if(!filteredLists.length) return null

  return (
    <ul className="">
      {filteredLists?.map(value => 
        <li  
          key={value.id} 
          className={`
            flex
            justify-between
            items-center
            px-[20px] 
            py-[8px] 
            hover:bg-green-50 
            ${findValue(value.label) || outlined? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
          onClick={() => handleSelected(value)}
        >
          <div>
            {renderOption ? highlightText(value.label, searchText) : value.label}
          </div>
          {findValue(value.label) &&
            <FontAwesomeIcon icon={faCheck} className="text-green-500 text-[12px]"/>
          }
        </li>
      )}
    </ul>
  )
}

const Tag = ({children, handleDelete}) => {
  return (
    <div className="flex gap-[6px] items-center px-[8px] py-[2px] rounded-full border bg-slate-50">
      <span>{children}</span>
      <button className="text-[16px] text-slate-600" onClick={handleDelete}>
        <FontAwesomeIcon icon={faCircleXmark}/>
      </button>
    </div>
  )
}


export default Dropdown;