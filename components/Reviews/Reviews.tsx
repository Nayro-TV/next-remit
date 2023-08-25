'use client'

import { FC } from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '..'

const Reviews: FC = () => {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		autoplay: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		responsive: [
			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	}

	return (
		<div className='reviews'>
			<div className='container'>
				<div className='reviews__inner'>
					<div className='reviews__title'>Ваши отзывы</div>
					<Slider className='reviews__list' {...settings}>
						<div className='reviews__item'>
							<div className='reviews__img'>
								<img src='/user.webp' alt='' />
							</div>
							<div className='reviews__text'>
								<div className='reviews__name'>Петр Смирнов</div>
								<div className='reviews__desc'>
									Хотелось бы поблагодарить команду за столь ответственное
									отношение к работе - все сделали даже раньше назначенного
									срока, учли все пожелания.
								</div>
							</div>
						</div>
						<div className='reviews__item'>
							<div className='reviews__img'>
								<img src='/user.webp' alt='' />
							</div>
							<div className='reviews__text'>
								<div className='reviews__name'>Александра Иванова</div>
								<div className='reviews__desc'>
									Мастер приехал быстро! Спасибо за проявленный профессионализм
									и за то что быстро отремонтировали компьютер. Большое спасибо!
									Очень довольны!
								</div>
							</div>
						</div>
						<div className='reviews__item'>
							<div className='reviews__img'>
								<img src='/user.webp' alt='' />
							</div>
							<div className='reviews__text'>
								<div className='reviews__name'>Анна Селезнёва</div>
								<div className='reviews__desc'>
									Давно хотелось починить свой ноутбук. Мастера компании
									справились с этим более чем на отлично - просто фантастически.
								</div>
							</div>
						</div>
						<div className='reviews__item'>
							<div className='reviews__img'>
								<img src='/user.webp' alt='' />
							</div>
							<div className='reviews__text'>
								<div className='reviews__name'>Виктор Краснов</div>
								<div className='reviews__desc'>
									Все сделали даже раньше назначенного срока, учли все
									пожелания. Все сделали даже раньше назначенного срока, учли
									все пожелания.
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default Reviews
