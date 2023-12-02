
import './ImagemDoCampeao.css'

const ImagemDoCampeao = (props) => {

    const opcoesImagens = [
        { valor: '/imagens/campeoes/aatrox.jpg', label: 'Aatrox'},
        { valor: '/imagens/campeoes/ahri.jpg', label: 'ahri'},
        { valor: '/imagens/campeoes/alistar.jpg', label: 'alistar'},
        { valor: '/imagens/campeoes/amumu.jpg', label: 'amumu'},
        { valor: '/imagens/campeoes/blitzcrank.jpg', label: 'blitzcrank'},
        { valor: '/imagens/campeoes/braum.jpg', label: 'braum'},
        { valor: '/imagens/campeoes/camille.jpg', label: 'camille'},
        { valor: '/imagens/campeoes/chogath.jpg', label: 'chogath'},
        { valor: '/imagens/campeoes/drmundo.jpg', label: 'drmundo'},  
       ]

  return (
    <div>  <label>Selecione a imagem do seu campeão </label>
          <select
            onChange={(evento) => props.alterado(evento.target.value)}
            required={props.required}
            value={props.valor}
          >
            <option value="" >
              Escolha uma imagem
            </option>
            {opcoesImagens.map((opcao) => (
              <option key={opcao.valor} value={opcao.valor} data-imagem={opcao.valor}>
                {opcao.label}
              </option>
            ))}
          </select>
          </div>
  
  )
}

export default ImagemDoCampeao
