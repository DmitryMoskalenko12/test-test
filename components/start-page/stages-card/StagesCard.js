const StagesCard = ({id, projectClass, clazz, projectTitle, projectList, itemClass, title, text, SvgComponent}) => {
    return <article key={id} className={`${projectClass} ${clazz}`}>
                <SvgComponent/>
                <h3 className={projectTitle}>{title}</h3>
                <ul className={projectList}>
                    <li className={ itemClass}>{text.item1}</li>
                    <li className={ itemClass}>{text.item2}</li>
                    <li className={ itemClass}>{text.item3}</li>
                </ul>
            </article>
}

export default StagesCard;