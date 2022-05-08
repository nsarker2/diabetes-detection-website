import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {
    const onCLick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1 style={{color: 'black'}}>{title}</h1>
            <Button 
            color={'steelblue'}
            text={'Sign Up'}
            onClick={onAdd}
            />
            <Button 
            color={'blue'}
            text={'Login'}
            onClick={onAdd}
            />
            <Button 
            color={'steelblue'}
            text={'Add New Log'}
            onClick={onAdd}
            />
    </header>
    )
}

Header.defaultProps = {
    title: 'Diabetes Detection and Prevention'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
export default Header


