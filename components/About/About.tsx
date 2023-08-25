import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const About: FC = () => {
	return (
		<div className='about'>
			<div className='container'>
				<div className='about__body'>
					<div className='about__l'>
						<h2 className='about__title'>Немного о нас</h2>
						<div className='about__text'>
							<p>
								Наша компания осуществляет ремонт техники разных марок любой
								степени сложности на протяжении многих лет. За годы работы мы
								накопили большой опыт и по праву считаемся упешными
								специалистами в данной области.
							</p>
							<p>
								Мы сотрудничаем с клиентами всех масштабов, от частных лиц до
								малых и средних предприятий, и всегда ориентируемся на
								индивидуальный подход к каждому клиенту.
							</p>
							<p>
								Если у вас возникли проблемы с вашей техникой или вы нуждаетесь
								в помощи с сборкой ПК, мы готовы вам помочь. Обратитесь к нам
								сегодня и доверьте нам свою технику, чтобы мы могли оказать вам
								профессиональную помощь и вернуть вашу технику в рабочее
								состояние.
							</p>
						</div>
						<Link href='/about'>
							<div className='title__btn'>подробнее</div>
						</Link>
					</div>
					<div className='about__r'>
						<div className='about__item'>
							<div className='about__img__cont'>
								<div className='about__img _cont'>
									<Image width={60} height={85} src='/disk.webp' alt='' />
								</div>
							</div>
							<div className='about__list'>
								<div className='about__r__title'>
									Минимальные цены за качественный ремонт
								</div>
								<div className='about__r__text'>
									Вы оплачиваете только реально проделанную работу
								</div>
							</div>
						</div>
						<div className='about__item'>
							<div className='about__img__cont'>
								<div className='about__img'>
									<Image width={70} height={70} src='/lom.webp' alt='' />
								</div>
							</div>
							<div className='about__list'>
								<div className='about__r__title'>
									Гарантия и акт выполненных работ
								</div>
								<div className='about__r__text'>
									Гарантии на все виды работ от 1 года.
								</div>
							</div>
						</div>
						<div className='about__item'>
							<div className='about__img__cont'>
								<div className='about__img'>
									<Image width={70} height={70} src='/comp.webp' alt='' />
								</div>
							</div>
							<div className='about__list'>
								<div className='about__r__title'>
									Выезд и диагностика 0 рублей!
								</div>
								<div className='about__r__text'>
									Мы умеем слышать и помнить то что хочет клиент
								</div>
							</div>
						</div>
						<div className='about__item'>
							<div className='about__img__cont'>
								<div className='about__img'>
									<Image width={70} height={70} src='/printer.webp' alt='' />
								</div>
							</div>
							<div className='about__list'>
								<div className='about__r__title'>
									Профессионализм сотрудников
								</div>
								<div className='about__r__text'>
									Добросовестность выполнения поставленных задач.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
