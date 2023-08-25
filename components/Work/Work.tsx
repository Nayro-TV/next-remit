import Image from 'next/image'
import { FC } from 'react'

const Work: FC = () => {
	return (
		<div className='work'>
			<div className='container'>
				<div className='work__body'>
					<div className='work__l'>
						<div className='work__img_top'>
							<Image width={350} height={404} src='/pic1.webp' alt='' />
						</div>
						<div className='work__img_down'>
							<div className='work__img__two'>
								<Image width={303} height={350} src='/pict2.webp' alt='' />
							</div>
							<div className='work__img__tree'>
								<Image width={303} height={350} src='/pict3.webp' alt='' />
							</div>
						</div>
					</div>
					<div className='work__r'>
						<div className='work__title'>Как мы работаем</div>
						<div className='work__list'>
							<div className='work__item'>
								<div className='work__item__num'>01</div>
								<div className='work__item__title'>Заявка</div>
								<div className='work__item__desc'>
									Позвоните нам и оставите у нас заявку
								</div>
							</div>
							<div className='work__item'>
								<div className='work__item__num'>02</div>
								<div className='work__item__title'>Проблема</div>
								<div className='work__item__desc'>
									Назначаем консультацию, находим проблему
								</div>
							</div>
							<div className='work__item'>
								<div className='work__item__num'>03</div>
								<div className='work__item__title'>Заключение договора</div>
								<div className='work__item__desc'>
									Назначьте удобное для Вас время приезда компьютерного мастера
								</div>
							</div>
							<div className='work__item'>
								<div className='work__item__num'>04</div>
								<div className='work__item__title'>Выполнение работ</div>
								<div className='work__item__desc'>
									Ремонт компьютеров может выполняться у Вас на дому или
									сервисном центре
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
