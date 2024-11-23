import { motion } from 'framer-motion'
import * as Avatar from '@radix-ui/react-avatar'
import { Mail, Phone, MapPin, CreditCard } from 'lucide-react'
import { UserDialog } from './UserDialog'
import { styled } from '@stitches/react'
import { Company } from '../types/allTypes'

const Card = styled('div', {
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  overflow: 'hidden',
})

const CardHeader = styled('div', {
  padding: '1rem',
  borderBottom: '1px solid #e5e7eb',
})

const CardContent = styled('div', {
  padding: '1rem',
})

const Badge = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.25rem 0.5rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '500',
  backgroundColor: '#e5e7eb',
  color: '#374151',
  marginTop: '0.25rem',
})

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className='my-4'
    >
      <Card>
        <CardHeader>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Avatar.Root style={{ width: '64px', height: '64px', borderRadius: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#e5e7eb' }}>
                  <Avatar.Image
                    src={company.logo}
                    alt={company.companyName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Avatar.Fallback style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e7eb', color: '#374151', fontSize: '1.5rem', fontWeight: '500' }}>
                    {company.companyName.substring(0, 2)}
                  </Avatar.Fallback>
                </Avatar.Root>
              </motion.div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>{company.companyName}</h2>
                <div className='flex space-x-4'>
                <Badge>GST: {company.gst_num}</Badge>
                <div className='sm:hidden block'>
           <UserDialog companyId={company.id} />
           </div>
                </div>
              </div>
            </div>
           <div className='hidden sm:block'>
           <UserDialog companyId={company.id} />
           </div>
          </div>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <InfoItem icon={<Mail size={16} />} text={company.email} />
            <InfoItem icon={<Phone size={16} />} text={company.mobileNumber} />
            <InfoItem icon={<MapPin size={16} />} text={company.address} />
            <InfoItem 
              icon={<CreditCard size={16} />} 
              text={`Credit Limit: $${company.availableCreditLimit.toLocaleString()}`}
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div 
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
      whileHover={{ scale: 1.05, x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span style={{ flexShrink: 0, color: '#6b7280' }}>{icon}</span>
      <span style={{ flexGrow: 1 }}>{text}</span>
    </motion.div>
  )
}

