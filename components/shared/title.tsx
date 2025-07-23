interface TitleProps {
    title: string
    subtitle: string
}

const Title = (props: TitleProps) => {
    const {title, subtitle} = props
    return(
        <div className="titleContainer">
            <h3 className="title">{title}</h3>
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    );
}

export default Title;