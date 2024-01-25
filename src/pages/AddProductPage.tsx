const AddProductPage = () => {
	return (
		<main className='relative flex items-center justify-center'>
			<div className='w-[40vw] bg-[#27272c] h-[35rem] p-8 rounded-lg'>
				<h3 className='mb-6 font-semibold'>Create product</h3>
				<div className='flex justify-between gap-3 mb-3'>
					<div className='flex-1 text-sm '>
						<label htmlFor='title'>Product Name</label>
						<input
							type='text'
							id='title'
							placeholder='Your product'
							className='w-full bg-[#414148] p-2 rounded-md border-2 border-[#664ba6] mt-1'
							required
						/>
					</div>
					<div className='flex-1 text-sm'>
						<label htmlFor='category'>Category</label>
						<input
							type='text'
							id='title'
							placeholder='Vintage'
							className='w-full bg-[#414148] p-2 rounded-md border-2 border-[#664ba6] mt-1'
							required
						/>
					</div>
				</div>
				<div className='flex-1 text-sm'>
					<label htmlFor='category'>Description</label>
					<textarea
						rows={5}
						className='w-full bg-[#414148] p-2 rounded-md border-2 border-[#664ba6] mt-1 mb-4'
						placeholder='My product is..'
						required
					></textarea>
				</div>
				<label
					htmlFor='images'
					className='p-3 text-xs font-semibold text-white transition-all border-none rounded cursor-pointer bg-violet-500 hover:brightness-110'
				>
					Upload Images
				</label>
				<input id='images' type='file' className='hidden' required />
				<div className='flex-1 mt-5 text-sm'>
					<label htmlFor='category'>Keywords</label>
					<input
						type='text'
						id='title'
						placeholder='Sport...'
						className='w-full bg-[#414148] p-2 rounded-md border-2 border-[#664ba6] mt-1'
						required
					/>
				</div>
				<div className='flex items-center justify-between'>
					<div className='w-1/3 mt-3 text-sm'>
						<label htmlFor='category'>Price</label>
						<input
							type='text'
							id='title'
							placeholder='Sport...'
							className='w-full bg-[#414148] p-2 rounded-md border-2 border-[#664ba6] mt-1'
							required
						/>
					</div>
					<button
						type='submit'
						className='self-end px-5 py-2.5 rounded hover:brightness-110 transition-all text-sm bg-green-600'
					>
						Create
					</button>
				</div>
			</div>
		</main>
	)
}

export default AddProductPage
