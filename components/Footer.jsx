import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdMail } from 'react-icons/md'
import { NAME, DETAILS, CONTACTS, SOCIAL_LINKS } from '../constants/constants'

const Footer = () => {
  const year = new Date().getFullYear()
  const address = `${DETAILS.City}, ${DETAILS.Residence}`

  return (
    <footer id="intro" className="relative z-4 mt-12 sm:mt-10 md:mt-8 bg-MidNightBlack text-LightGray" style={{ contain: 'layout' }}>
      <div className="px-4 md:px-8 py-8 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="text-Snow text-base font-bold">{NAME}</div>
          <div className="text-xs">© {year} All Rights Reserved.</div>
        </div>

        <address className="not-italic space-y-3">
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-Snow" aria-hidden="true" />
            <span className="text-xs" aria-label="Company address">{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-Snow" aria-hidden="true" />
            <a className="text-xs underline" href={`tel:${CONTACTS.PHONE}`} aria-label="Phone number" title={CONTACTS.PHONE}>{CONTACTS.PHONE}</a>
          </div>
          <div className="flex items-center gap-2">
            <MdMail className="text-Snow" aria-hidden="true" />
            <a className="text-xs underline" href={`mailto:${CONTACTS.EMAIL}`} aria-label="Email address" title={CONTACTS.EMAIL}>{CONTACTS.EMAIL}</a>
          </div>
        </address>

        <div className="space-y-2">
          <div className="text-Snow text-sm font-semibold">Follow</div>
          <div className="flex items-center gap-4 text-xl text-Snow">
            <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <FaGithub aria-hidden="true" />
            </Link>
            <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </Link>
            <Link href={SOCIAL_LINKS.INSTA} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <FaInstagram aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer