import './Header.css'
type HeaderProps = {
    title: string,
}
export const Header = ({ title }: HeaderProps): React.ReactElement=> {
  return <header><h1>{title}</h1></header>
}

