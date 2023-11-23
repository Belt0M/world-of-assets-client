import DOMPurify from 'dompurify'
import { FC } from 'react'

interface Props {
	keywords: string[]
}

const AssetFullDescription: FC<Props> = ({ keywords }) => {
	const fullDesc = `
	<p>
					Tutorial: <a href='#'>Link</a>
				</p>
				<p>
					Showcase: <a href='#'>Link</a>
				</p>
				<p>
					Documentation PDF: <a href='#'>Link</a>
				</p>
				<br />
				<h6>Game Ready, time saver:</h6>
				<p>Dissolve Anything using the Blueprint system:</p>
				<br />
				<ul>
					<li>Select your Static / Skeletal / Character mesh to Dissolve.</li>
					<li>Select and Set the Mesh's Materials to Dissolve.</li>
					<li>Select the Sound & the attenuation.</li>
					<li>That's all!</li>
				</ul>
				<br />
				<p>Works with sequencer to create movie effect.</p>
				<p>Use Box, sphere, or Static Mesh as a Dissolver.</p>
				<br />
				<h4>Technical Details</h4>
				<br />
				<ul>
					<li>38 Sound waves Looped</li>
					<li>19 sound waves</li>
					<li>3 Blueprint Dissolver system</li>
					<li>6 Master Materials</li>
					<li>6 Material Instances</li>
					<li>8 Material Function</li>
					<li>1 Sequence</li>
					<li>1 Static Mesh</li>
					<li>15 Textures</li>
				</ul>
				<br />
				<p>Supported Development Platforms: Windows, Mac</p>
				<p>
					Documentation PDF: <a href='#'>Link</a>
				</p>`

	return (
		<>
			<div className='p-6'>
				<div
					className='content'
					dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(fullDesc) }}
				></div>
				<div className='mt-3'>
					<h6 className='font-semibold'>Tags</h6>
					<div className='flex flex-wrap gap-1 mt-2'>
						{keywords.map(tag => (
							<span
								key={tag}
								className='px-2 py-1 uppercase rounded-sm text-violet-500 bg-violet-950 bg-opacity-20'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default AssetFullDescription
