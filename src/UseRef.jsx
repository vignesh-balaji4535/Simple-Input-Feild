import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [data,setData]=useState('');
    const [out,setOut]=useState('');
    
    const [news,setNews]=useState('')

    let count=useRef(null)




    const btnHandle=()=>{
        if(data){
            setOut(data);
            setNews('');            
            count.current.value='';

        }
        else{
            count.current.focus();
            setNews(()=><div className='ptag '><p className='d-flex align-items-center m-0'><svg className='text-center' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
          </svg></p><p className='m-0'>Enter valid Input </p></div>)
        }
           setData('');
        }
       
  return (
    <div>
        {out?<h3>{`Hi !!!${out},Wellcome !!!`}</h3>:''}

        <input type="text" ref={count} value={data} onChange={(e)=>{setData(e.target.value)}} placeholder='Enter Your Name' />
       {data?'':news}

        <br />
        <button onClick={btnHandle}>Update</button>
       <br />
        <br />
    </div>
  )
}

export default UseRef