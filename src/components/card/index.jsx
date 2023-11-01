import './index.css';
const Card = ({title, content}) => {
    return(
        <article>
            <div>
                <h2 className="titulo">{title}</h2>
                <p className='conteudo'>{content}</p>
            </div>
            <a className="link" href="www.github.com">Acessar post</a>
        </article>
    )
}

export default Card;