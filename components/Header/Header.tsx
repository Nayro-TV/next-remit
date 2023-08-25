import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className='header subheader_box' id='header'>
			<div className='container'>
				<div className='header__body'>
					<Link href='/'>
						<div className='header__logo'>
							<div className='header__logo__img'>
								<Image width={64} height={64} src='/logo.webp' alt='' />
							</div>
							<div className='header__logo__name'>Remito</div>
						</div>
					</Link>
					<div className='header__info'>
						<div className='header__item'>
							<div className='header__info__img'>
								<svg
									xmlnsXlink='http://www.w3.org/1999/xlink'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									height={24}
									stroke='#000'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									viewBox='0 0 24 24'
									width={24}
									data-prefix='iedxpeyjz'
								>
									<path
										d='M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
										data-changed='true'
										className='path-ithqphy3e'
										strokeOpacity='0.9'
										stroke='#018CFF'
										fillOpacity='0.01'
										fill='#46CC80'
										strokeWidth='2px'
									/>
								</svg>
							</div>
							<div className='header__tel__text'>
								<a href='tel:79630376182'>7 (963) 037-61-82</a>
							</div>
						</div>
						<div className='header__item none'>
							<div className='header__info__img'>
								<svg
									xmlnsXlink='http://www.w3.org/1999/xlink'
									xmlns='http://www.w3.org/2000/svg'
									width={24}
									height='23.953125'
									viewBox='0 0 512 511'
									data-prefix='ian161qsv'
								>
									<path
										d='M204.5 458.83v51.88l-12.539-10.13a840.729 840.729 0 0 1-94.781-92.71C32.7 333.8 0 267.31 0 210.255V204.6C0 91.783 91.738 0 204.5 0S409 91.783 409 204.6v5.655c0 4.791-.25 9.658-.72 14.582l-39.99-36.5c-8.19-83.2-78.517-148.412-163.79-148.412-90.758 0-164.6 73.876-164.6 164.678v5.655c0 96.415 124.164 213.135 164.6 248.575zm122.7-28.67h59.85v-59.89H327.2v59.89zM204.5 119.766a84.832 84.832 0 1 1-84.793 84.834 84.911 84.911 0 0 1 84.793-84.834zm0 39.921a44.913 44.913 0 1 0 44.891 44.913 44.952 44.952 0 0 0-44.891-44.913zM485.11 403.03l-11.22-10.24v64.09a54.173 54.173 0 0 1-54.1 54.12H293.461a54.173 54.173 0 0 1-54.1-54.12v-64.09l-11.218 10.24-26.891-29.49L356.62 231.722 512 373.54zm-51.12-46.66l-77.37-70.61-77.354 70.61v100.51a14.213 14.213 0 0 0 14.2 14.2H419.79a14.216 14.216 0 0 0 14.2-14.2V356.37zm0 0'
										fillRule='evenodd'
										className='path-iz3ozcnai'
										fillOpacity='0.9'
										fill='#018CFF'
									/>
								</svg>
							</div>
							<div className='header__tel__text' style={{ fontSize: 16 }}>
								г. Екатеринбург
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
