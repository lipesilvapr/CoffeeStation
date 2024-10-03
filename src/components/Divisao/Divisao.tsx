import { Divisa } from "./styles";
import Linha from '../../assets/linha.svg';
import Xicara from '../../assets/xicara.svg';

function Divisao() {
    return(
        <Divisa>
           <img className="linha" src={Linha}/>
           <img className="xicara" src={Xicara}/>
           <img className="linha" src={Linha}/>
           <img className="xicara" src={Xicara}/> 
           <img className="linha" src={Linha}/> 
        </Divisa>
    );
}

export default Divisao;