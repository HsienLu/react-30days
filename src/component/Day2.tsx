import { useState } from 'react';
import styles from './Day2.module.css'
interface Item{
    title:string;
    content:string;
}
interface AccordingProps{
    items:Item;
}
function According({items}:AccordingProps){
    const [buttonIsShow,setButtonIsShow]=useState<boolean>(false)
    const handleButtonIsShow=()=>{
        setButtonIsShow(!buttonIsShow)
    }
    return(<>
    <div className={styles.flexButton}>
        <h2>{items.title}</h2>
        <button onClick={handleButtonIsShow} style={{ width:'50px',height:'50px'}}>+</button>
    </div>
        <p className={buttonIsShow ? styles.show :styles.accordingStyle}>{items.content}</p>
    </>)
}

function Day2(){
    const testData=[
        {
          title: "What is Github and how does it work?",
          content:
            "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
        },
        {
          title: "How do I see GitHub's availability?",
          content: "Check our real-time status report",
        },
        {
          title: "Why is GitHub so popular?",
          content:
            "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
        },
]
    return(<>
    
    <h1>Day2</h1>
    {testData.map((v)=>{

    return <According key={v.title} items={v}></According>
    })}
    </>)
}

export default Day2