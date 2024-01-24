import {FC} from 'react'
import {IReview} from '../types/IReview'

interface Props {
	reviews: IReview[]
}

const ReviewsSection: FC<Props> = ({reviews}) => {
	return (
		<div className='flex flex-col gap-4'>
			{reviews.length &&
				reviews.map(el => (
					<div className='p-3 bg-white rounded bg-opacity-10' key={el.content}>
						<h5>{el.author}</h5>
						<p>{el.content}</p>
						<div className='flex justify-between'>
							<span>{el.date_created}</span>
							<span>{el.rating}</span>
						</div>
					</div>
				))}
		</div>
	)
}

export default ReviewsSection
