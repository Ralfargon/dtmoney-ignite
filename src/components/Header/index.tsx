import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTranslationModal: () => void;
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button
          type="button"
          onClick={onOpenNewTranslationModal}
        >
          Nova transação
        </button>


      </Content>
    </Container>
  )
}