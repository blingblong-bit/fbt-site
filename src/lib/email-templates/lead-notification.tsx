import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface LeadField {
  label: string
  value: string
}

interface Props {
  heading?: string
  intro?: string
  fields?: LeadField[]
}

const Email = ({ heading, intro, fields }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{intro || 'A new inquiry was submitted on your website.'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>FIT BEYOND THERAPY</Text>
        <Heading style={h1}>{heading || 'New website inquiry'}</Heading>
        <Text style={lead}>{intro || 'A new inquiry was submitted on your website.'}</Text>
        <Hr style={hr} />
        <Section>
          {(fields || []).map((field) => (
            <Text key={field.label} style={row}>
              <span style={label}>{field.label}</span>
              <br />
              <span style={value}>{field.value}</span>
            </Text>
          ))}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Sent automatically from fitbeyondtherapy.com</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    (data['subject'] as string) || 'New website inquiry — FIT Beyond Therapy',
  displayName: 'Lead notification',
  previewData: {
    heading: 'New consultation request',
    intro: 'Someone requested a consultation through the contact form.',
    fields: [
      { label: 'Name', value: 'Jane Doe' },
      { label: 'Phone', value: '(931) 555-0134' },
      { label: 'Email', value: 'jane@example.com' },
      { label: 'Primary goal', value: 'Return to walking without knee pain' },
    ],
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const brand = {
  fontSize: '11px',
  letterSpacing: '2px',
  color: '#1e3a5f',
  fontWeight: 700,
  margin: '0 0 8px',
}
const h1 = { fontSize: '22px', color: '#0f172a', margin: '0 0 8px', fontWeight: 700 }
const lead = { fontSize: '14px', color: '#475569', margin: '0' }
const hr = { borderColor: '#e2e8f0', margin: '20px 0' }
const row = { margin: '0 0 14px', fontSize: '14px', lineHeight: '1.5' }
const label = {
  fontSize: '11px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  color: '#64748b',
  fontWeight: 700,
}
const value = { color: '#0f172a', fontSize: '15px' }
const footer = { fontSize: '12px', color: '#94a3b8', margin: '0' }
