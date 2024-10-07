import { Bt } from "./styles";

interface Props {
    text: string;
    color: string;
    textColor: string;
    onClick: () => void;
}

function Botao({text, color, textColor, onClick}: Props) {
    return(
        <Bt style={{backgroundColor: color}} onClick={onClick}>
            <p style={{color: textColor}}>{text}</p>
        </Bt>
    );
}

export default Botao;