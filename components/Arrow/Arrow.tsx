import { FC } from 'react'

const PrevArrow: FC = () => {
	return (
		<div className='slick-arrow slick-prev'>
			<img src='/prev.svg' alt='1' />
		</div>
	)
}

const NextArrow: FC = () => {
	return (
		<div className='slick-arrow slick-next'>
			<img src='/next.svg' alt='2' />
		</div>
	)
}

export { PrevArrow, NextArrow }
