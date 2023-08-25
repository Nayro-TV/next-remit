import { Footer, Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import Head from 'next/head'
import { FC } from 'react'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const oswald = Oswald({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: `&#128165;Remito. &#9989;Заправка картириджей, &#9989;ремонт принтеров, и много другого`,
	description:
		'💥Мы - компания с ⚡пятью годами &#9989;опыта в области &#128308;ремонта и сборки компьютеров🖥️, а также оргтехники, &#9989;включая принтеры🎁 и другие 💠устройства.',
}

interface Ilayout {
	children: React.ReactNode
}

const RootLayout: FC<Ilayout> = ({ children }) => {
	return (
		<html lang='ru'>
			<Head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<body className={oswald.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
export default RootLayout
