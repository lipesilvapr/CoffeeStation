import { Divisa } from "./styles";
import Linha from '../../assets/linha.svg';
import Xicara from '../../assets/xicara.svg';

function Divisao() {
    return(
        <Divisa>
           <img src={Linha}/>
           <img src={Xicara}/>
           <img src={Linha}/>
           <img src={Xicara}/> 
           <img src={Linha}/> 
        </Divisa>
    );
}

export default Divisao;