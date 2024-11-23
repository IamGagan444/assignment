import { motion } from 'framer-motion'
import CompanyCard from '../components/CompanyCard'
import { Company } from '../types/allTypes'


interface CompanyListProps {
  companies: Company[]
}

export default function CompanyList({ companies }: CompanyListProps) {
  return (
    <motion.div 
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {companies.map((company, index) => (
        <motion.div
          key={company.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CompanyCard company={company} />
        </motion.div>
      ))}
    </motion.div>
  )
}

