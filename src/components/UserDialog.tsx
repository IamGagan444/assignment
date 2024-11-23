import { useState } from "react"
import axios from "axios"
import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'
import { Cross2Icon } from '@radix-ui/react-icons'
import { User } from '../types/allTypes'

const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
})

const StyledContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '425px',
  maxHeight: '85vh',
  padding: '25px',
})

const StyledTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '#111827',
  fontSize: '1.25rem',
})

const StyledDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: '#6b7280',
  fontSize: '0.875rem',
})

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6b7280',
  position: 'absolute',
  top: 10,
  right: 10,
  '&:hover': { backgroundColor: '#f3f4f6' },
})

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 15px',
  fontSize: '0.875rem',
  lineHeight: 1,
  fontWeight: 500,
  height: '35px',
  backgroundColor: '#f3f4f6',
  color: '#374151',
  '&:hover': { backgroundColor: '#e5e7eb' },
})

export function UserDialog({ companyId }: { companyId: string }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleOpen = async () => {
    if (!user && !loading) {
      setLoading(true);
      try {
        const result = await axios.get(
          `https://673736a9aafa2ef222330e54.mockapi.io/users`
        );
        const filteredUser = result.data.find((item: User) => item.id === companyId);
        setUser(filteredUser || null);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Dialog.Root onOpenChange={(open) => {
      if (open) {
        handleOpen();
      }
    }}>
      <Dialog.Trigger asChild>
        <Button>View User</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <StyledTitle>Company User Information</StyledTitle>
          <StyledDescription>
            View details about the user associated with this company.
          </StyledDescription>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {loading ? (
              <p>Loading user information...</p>
            ) : user ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 500 }}>Name:</span>
                  <span>{user.name}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 500 }}>Email:</span>
                  <span>{user.email}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 500 }}>Phone:</span>
                  <span>{user.mobileNumber}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 500
}}>currency:</span>
                  <span>{user.currency}</span>
                </div>
              </>
            ) : (
              <p>No user information found for this company.</p>
            )}
          </div>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

