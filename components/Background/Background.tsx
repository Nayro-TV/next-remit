import { FC } from 'react'
import Link from 'next/link'

const Background: FC = () => {
	return (
		<div className='bg'>
			<div className='container'>
				<nav className='nav'>
					<ul className='nav__list'>
						<div className='nav__close'>
							<img data-src='img/close.svg' alt='' />
						</div>
						<li className='nav__item'>
							<Link href='index.html' className='nav__link'>
								ГЛАВНАЯ
							</Link>
						</li>
						<li className='nav__item'>
							<Link href='about.html' className='nav__link'>
								О КОМПАНИИ
							</Link>
						</li>
						<li className='nav__item'>
							<Link href='price-list.html' className='nav__link'>
								Прайс-лист
							</Link>
						</li>
						<li className='nav__item'>
							<Link href='kontakty.html' className='nav__link'>
								КОНТАКТЫ
							</Link>
						</li>
						<li className='nav__item'>
							<Link href='services.html' className='nav__link'>
								УСЛУГИ
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<section className='section'>
				<div className='title'>
					<div className='container'>
						<div className='section__title'>
							<div className='title__title'>
								Cрочный ремонт компьютеров с выездом на дом по Екатеринбургу
							</div>
							<div className='title__text'>
								Закажите бесплатную диагностику компьютера уже сейчас
							</div>
							<a href='tel:79630376182'>
								<div className='title__btn'>позвонить</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Background
