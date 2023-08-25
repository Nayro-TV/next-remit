'use client'

import { FC } from 'react'
import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Services: FC = () => {
	const settings = {
		infinite: true,
		slidesToShow: 4,
		autoplay: true,
		// autoplaySpeed: 5000,
		// slidesToScroll: 2
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					dots: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	}

	return (
		<div
			className='services'
			data-src='background-image:var(--image-ioppj59n4),var(--image-i8ybm5wp7),var(--image-in7eby5i8)'
		>
			<div className='container'>
				<div className='services__title'>Наши услуги</div>
				<div className='services__desc'>Гарантия качества на высшем уровне</div>
				<Slider className='services__body' {...settings}>
					<div className='services__item'>
						<div className='services__img'>
							<img src='/pp5.webp' alt='' />
						</div>
						<div className='services__text'>
							Ремонт компьютерной <br />
							техники
						</div>
						<div className='services__price'>От 500 ₽.</div>
					</div>
					<div className='services__item'>
						<div className='services__img'>
							<img src='/pp1.webp' alt='' />
						</div>
						<div className='services__text'>
							Заправка <br />
							картриджей
						</div>
						<div className='services__price'>От 300 ₽.</div>
					</div>
					<div className='services__item'>
						<div className='services__img'>
							<img src='/pp2.webp' alt='' />
						</div>
						<div className='services__text'>
							Сборка <br />
							компьютера
						</div>
						<div className='services__price'>От 2000 ₽.</div>
					</div>
					<div className='services__item'>
						<div className='services__img'>
							<img src='/pp4_2.webp' alt='' />
						</div>
						<div className='services__text'>
							Ремонт <br />
							принтеров
						</div>
						<div className='services__price'>От 700 ₽.</div>
					</div>
					<div className='services__item'>
						<div className='services__img'>
							<img src='/pp4_1.webp' alt='' />
						</div>
						<div className='services__text'>
							Настройка <br />
							сети (Wi-Fi)
						</div>
						<div className='services__price'>От 1000 ₽.</div>
					</div>
				</Slider>

				<a href='services.html'>
					<div className='title__btn s__btn'>
						<p>все услуги</p>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Services
