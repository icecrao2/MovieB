

export const TransparentCard = ({ children,
  backgroundColor = 'rgba(0,0,0,0.3)',
  width = '700px',
  height = '500px',
  borderRadius = '20px',
  padding = '10px 10px 10px 10px' }) => {


  const styles = {
    backgroundColor,
    width,
    height,
    borderRadius,
    padding,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '1',
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}