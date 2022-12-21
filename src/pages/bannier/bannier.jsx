import banniere from '../../images/banniere.png';
import './bannier.css';
import background from '../../images/background.png';

const Bannier = () => {
    return (   
        <>   
            <img src={banniere } alt="logo kasa" className='image'/>
            <div className='background'>            
                <img src={background} />
            </div>                     
            <p className='banniere'>Chez vous, partout et ailleurs</p>
        </>
        )
    };

export default Bannier;