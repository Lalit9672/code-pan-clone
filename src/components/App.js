import React,{useState,useEffect} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import Editor from './Editor'

export default function App() {
 const[html,setHtml]=useLocalStorage('html','');
 const[css,setCss]=useLocalStorage('css','');
 const[js,setJs]=useLocalStorage('js',);
const [srcDoc, setSrcDoc] = useState("")
 useEffect(()=>
 {
     const timeOut=setTimeout(()=>
     {

      setSrcDoc(
        `
        <html>
        <body>${html} </body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
        `
       
      )
     },250)
return ()=>{  clearTimeout(timeOut)  
console.log("Cancel");
};
 },[html,css,js])
 
    return(
        <>
        <div className="pane top-pane"> 
        <Editor language="xml" 
        displayName="HTML"
        value={html}
        onChange={setHtml}
        />
        <Editor language="css" 
        displayName="CSS"
        value={css}
        onChange={setCss}
        />
        <Editor language="js" 
        displayName="JS"
        value={js}
        onChange={setJs}
        />  
        </div>
        <div className="pane">
            <iframe 
            
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
            frameBorder="0"
            />
        </div>
      </>
    )
}
