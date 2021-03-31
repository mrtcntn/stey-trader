import { useRef, useState } from "react"
import useClickAway from "../hooks/useClickAway";

const Dropdown = ({options, value, onChange, className, valueRenderer}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useClickAway(wrapperRef, () => setOpen(false));
  const namespace = {"xml:space":"preserve"};

  return <div key={'dropdown'} ref={wrapperRef} className={`inline-block relative ${className}`}>
    <button onClick={() => setOpen(!open)} style={{width: '100%'}} className="focus:outline-none focus:ring-1 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex justify-between items-center">
      <span className="mr-1">{value.label}</span>
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <div className={`z-20 border rounded-sm absolute text-gray-700 pt-1 ${!open ? 'hidden' : ''}`}>
    <button
      style={{width: wrapperRef.current?.offsetWidth}} 
      className="text-xs rounded-sm bg-white hover:bg-gray-100 py-2 px-4 flex flex-row justify-between whitespace-no-wrap transition-all text-left">
        <p>Currency</p>
        <p>Balance</p>
        </button>
      {options.map(v => <button key={v.label}
      onClick={(e) => {onChange(e, v); setOpen(false)}} style={{width: wrapperRef.current?.offsetWidth}} 
      className="group relative inline-block rounded-sm bg-white hover:bg-gray-100 py-2 px-4 whitespace-no-wrap transition-all text-left focus:outline-none">
        {valueRenderer(v)}
        <div className="opacity-0 w-28 bg-gray-900 bg-opacity-80 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 -right-28 bottom-0 px-3 pointer-events-none">
        {v.details}
        </div>
        </button>
    )}
      </div>
  </div>
}

export default Dropdown
