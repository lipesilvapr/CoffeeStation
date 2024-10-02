import { Bt } from "./styles";

interface Props {
    text: string;
    color: string;
    onClick: () => void;
}

function Botao({text, color, onClick}: Props) {
    return(
        <Bt style={{backgroundColor: color}} onClick={onClick}>
            <p>{text}</p>
        </Bt>
    );
}

export default Botao;