import {FC} from 'react'
import {FaStar} from 'react-icons/fa'
import {IReview} from '../types/IReview'

interface Props {
	reviews: IReview[]
}

const ReviewsSection: FC<Props> = ({reviews}) => {
	return (
		<div className='grid items-center grid-cols-2 gap-6 p-8'>
			{reviews.length &&
				reviews.map(el => (
					<div
						className='relative h-40 p-3 bg-white rounded bg-opacity-10'
						key={el.content}
					>
						<h5 className='mb-2 text-violet-500'>{el.author}</h5>
						<p>{el.content}</p>
						<div className='flex justify-between'>
							<span>{el.date_created}</span>
							<div className='absolute flex gap-1 text-yellow-300 bottom-4 right-4'>
								{Array(el.rating)
									.fill(0)
									.map((_, index) => (
										<FaStar key={index} />
									))}
							</div>
						</div>
					</div>
				))}
		</div>
	)
}

export default ReviewsSection
