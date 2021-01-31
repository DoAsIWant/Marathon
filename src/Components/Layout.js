import lay from "./Layout.module.css"

const Layout = ({title,id,bgImg,bgColor,children})=>{
    const inlineStyle = bgImg ? {background: 'url('+ bgImg + ')'} : {background: bgColor};
    return(
    
    <section style = {inlineStyle} className={lay.root} id={id}>
        <div className={lay.wrapper}>
            <article>
                <div className = {lay.title}>
                    {
                    title && <h3>{title}</h3> 
                    
                    }
                    <span className={lay.separator}></span>
                </div>
                <div className={`${lay.desc} ${lay.full}`}>
                    {children}
                
                </div>
            </article>
        </div>
    </section>
    )
}

export default Layout;