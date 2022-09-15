
export const LoginTitle = ({ content,
  color = 'white',
  fontSize = '60px',
  margin = '20px 0 20px 0 ',
}) => {

  const style = {
    color,
    fontSize,
    margin,
    textAlign: 'center',
  };

  return (
    <h1 style={style}>{content}</h1>
  )
}