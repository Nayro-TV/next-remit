import Image from 'next/image'
import styles from './page.module.css'
import About from '@/components/About/About'
import { Partners, Reviews, Services, Work } from '@/components'
import Background from '@/components/Background/Background'

export default function Home() {
	return (
		<>
			<Background />
			<Services />
			<About />
			<Work />
			<Partners />
			<Reviews />
		</>
	)
}
