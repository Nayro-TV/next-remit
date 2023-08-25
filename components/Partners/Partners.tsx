'use client'

import Image from 'next/image'
import { FC } from 'react'
import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import { NextArrow, PrevArrow } from '..'

const Partners: FC = () => {
	const settings = {
		infinite: true,
		slidesToShow: 4,
		// autoplay: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	}

	return (
		<div className='work__with'>
			<div className='container'>
				<div className='work__with__inner'>
					<div className='services__title'>С кем мы работали</div>
					<div className='work__with__slider'>
						<Slider {...settings}>
							<div className='work__with__item'>
								<div className='work__with__img w200'>
									<Image
										width={450}
										height={450}
										src='/dodo-pizza-logo.png'
										alt=''
									/>
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img'>
									<Image
										width={540}
										height={480}
										src='/logo-zavod-istok.png'
										alt=''
									/>
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img w200'>
									<Image width={300} height={300} src='/logo-dg.jpg' alt='' />
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img w200'>
									<Image width={775} height={800} src='/spg-logo.png' alt='' />
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img w300'>
									<Image width={540} height={480} src='/sk-ural.jpg' alt='' />
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img'>
									<Image
										width={765}
										height={625}
										src='/metko-logo.png'
										alt=''
									/>
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img w300'>
									<Image width={540} height={480} src='/logo_keer.png' alt='' />
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img'>
									<Image width={765} height={625} src='/logo-bio.png' alt='' />
								</div>
							</div>
							<div className='work__with__item'>
								<div className='work__with__img w300'>
									<Image
										width={765}
										height={625}
										src='/ros-tehn-logo.svg'
										alt=''
									/>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners
