import React, { useState } from 'react';
import './Layout.css'; //import css file
import logo from '../assets/img/logo.jpg'
import Output from './output';
//={}+[]

const Layout = (props) => {

    let [input,setInput] = useState('0')

    let [result,setResult] = useState('')

    const handleClick = (event) => {
        const value = event.target.value

        if(value === '='){
            if(input != ''){
                let res = ''
                try{
                    res = eval(input)
                }catch{
                    setResult("Math error")
                }
                if(res === undefined){
                    setResult("Math error")
                }else{
                setResult(input + '=')
                setInput(res)
                }
            }
        }else if(value === 'C'){
            setResult('')
            setInput('0')
        }else if(value === 'Del'){
            let str = input
            str = str.substr(0,input.length-1)
            setInput(str)
        }else  if(value === '0'){
            setInput(value)
        }else{
            setInput(input += value )
        }
    };

    return(
        <div className='frame'>
            <div className='calculator'>
                <br></br>
                <Output user={input} answer={result}/>
                <img src={logo} width='150px' height='100px' styles={{display:'block',marginRight:'auto',marginLeft:'auto'}}/>
                <div className='keys'>
                    <input type='button' value='C' className='button clear'onClick={handleClick}>
                    </input>
                    <input type='button' value='Del' className='button clear'onClick={handleClick}>
                    </input>
                    <input type='button' value='%' className='button operator'onClick={handleClick}>
                    </input>
                    <input type='button' value='/' className='button operator'onClick={handleClick}>
                    </input>

                    <input type='button' value='7' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='8' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='9' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='*' className='button operator'onClick={handleClick}>
                    </input>
                    
                    <input type='button' value='4' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='5' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='6' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='-' className='button operator'onClick={handleClick}>
                    </input>

                    <input type='button' value='1' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='2' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='3' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='+' className='button operator'onClick={handleClick}>
                    </input>

                    <input type='button' value='0' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='.' className='button 'onClick={handleClick}>
                    </input>
                    <input type='button' value='=' className='button operator'onClick={handleClick}>
                    </input>
                </div>
            </div>
        </div>
    )
};

export default Layout;