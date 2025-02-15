import { ReactNode } from "react"
import './Section.css'
type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({title = 'Default Section Title', children}: SectionProps) => {
  return (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section