import styles from '../../styles/login/btnStyle.module.css';


export const LoginBtn = ({
  content = 'sign in with google',
  width = '60px',
  height = '60px',
  margin = '15px 0px 15px 0px',
  fontSize = '30px',
  borderRadius = '20px',
  backgroundColor = 'black',
  color = 'black',
  src,
  alt,
  onClick,
}) => {


  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin
  }

  const imgStyle = {
    margin: '0 0 0 20px',
    width,
    height,
  };

  const btnStyle = {
    height: '80px',
    width: '400px',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    borderRadius,
    backgroundColor,
  }

  const spanStyle = {
    fontSize,
    marginLeft: '20px',
    color,
  }

  return (
    <div style={divStyle}>
      <button className={styles.btn} style={btnStyle} onClick={onClick}>
        <img style={imgStyle}
          src={src} alt={alt} />
        <span style={spanStyle}>{content}</span>
      </button>
    </div>
  )

}